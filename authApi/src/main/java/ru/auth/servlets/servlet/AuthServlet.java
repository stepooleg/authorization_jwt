package ru.auth.servlets.servlet;

import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import ru.auth.dao.UserDao;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.SecureRandom;

/**
 * Стартовая страница для аутентификации пользователя.
 */
public class AuthServlet extends HttpServlet {

    @Override
    protected void doPost(final HttpServletRequest request, final HttpServletResponse response) throws IOException, ServletException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        boolean isAuth = false;
        final UserDao userDao = new UserDao();
        if (!userDao.userIsExist(username, password)) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST);
        }else {
            isAuth = true;
        }

        try {
            if (!isAuth) {
                response.sendError(HttpServletResponse.SC_FORBIDDEN);
                response.sendRedirect(response.encodeRedirectURL("/no"));
            }
        } catch (Exception e) {
            System.out.println(e);
        }

        request.getSession().setAttribute("password", password);
        request.getSession().setAttribute("username", username);

        // Create an HMAC-protected JWS object with some payload
        JWSObject jwsObject = new JWSObject(new JWSHeader(JWSAlgorithm.HS256),
                new Payload(username+password));

        // We need a 256-bit key for HS256 which must be pre-shared
        byte[] sharedKey = new byte[32];
        new SecureRandom().nextBytes(sharedKey);

        // Apply the HMAC to the JWS object
        try {
            jwsObject.sign(new MACSigner(sharedKey));
        } catch (JOSEException e) {
            e.printStackTrace();
        }
        response.getWriter().println(jwsObject.serialize());
        response.setStatus(HttpServletResponse.SC_OK);
        //response.sendRedirect(response.encodeRedirectURL("/yes"));
    }

}
