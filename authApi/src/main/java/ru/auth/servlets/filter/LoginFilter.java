package ru.auth.servlets.filter;

import ru.auth.dao.UserDao;

import javax.servlet.*;
import java.io.IOException;

public class LoginFilter implements Filter {
    private final UserDao userDao = new UserDao();
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest,
                         ServletResponse servletResponse,
                         FilterChain filterChain)
            throws IOException, ServletException {
        String username = servletRequest.getParameter("username");
        String password = servletRequest.getParameter("password");

        boolean isAuth = false;
        if (userDao.userIsExist(username, password)) {
            isAuth = true;
            servletRequest.setAttribute("check", isAuth);
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }

    @Override
    public void destroy() {

    }
}
