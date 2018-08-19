package ru.auth.servlets.servlet;

import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import ru.auth.dao.UserDao;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.security.SecureRandom;

/**
 * Стартовая страница для аутентификации пользователя.
 */
public class AuthServlet extends HttpServlet {
    private HttpSession httpSession;

    @Override
    protected void doPost(final HttpServletRequest request, final HttpServletResponse response) throws IOException, ServletException {
     boolean auth = (boolean) request.getAttribute("check");
     httpSession = request.getSession();
        if (!auth) {
            response.sendError(HttpServletResponse.SC_FORBIDDEN);
            response.sendRedirect(response.encodeRedirectURL("/no"));
        }else {
            JWSObject jwsObject = new JWSObject(new JWSHeader(JWSAlgorithm.HS256),
                    new Payload(httpSession.toString()));

            // We need a 256-bit key for HS256 which must be pre-shared
            byte[] sharedKey = new byte[32];
            new SecureRandom().nextBytes(sharedKey);

            // Apply the HMAC to the JWS object
            try {
                jwsObject.sign(new MACSigner(sharedKey));
            } catch (JOSEException e) {
                e.printStackTrace();
            }
            response.getWriter().write(jwsObject.serialize());
            // response.setStatus(HttpServletResponse.SC_OK);
          //  response.sendRedirect(response.encodeRedirectURL("/yes"));
        }

    }

}
