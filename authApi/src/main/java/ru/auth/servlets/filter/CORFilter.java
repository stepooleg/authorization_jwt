package ru.auth.servlets.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CORFilter implements Filter {

    @Override
    public void init(final FilterConfig config) throws ServletException {
    }

    @Override
    public void doFilter(final ServletRequest request, final ServletResponse response, final FilterChain chain) throws IOException, ServletException {
        final HttpServletRequest req = (HttpServletRequest)request;
        final HttpServletResponse resp = (HttpServletResponse)response;
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Headers", "Accept, Accept-Encoding, Accept-Language, Authorization, Cache-Control, Connection, Content-Type, Cookie, DNT, Host, If, If-Modified-Since, Location, Pragma, Referer, X-Requested-With, x-requested-by, WWW-Authenticate, Upgrade-Insecure-Requests, User-Agent");
        resp.setHeader("Access-Control-Allow-Credentials", "true");
        resp.setHeader("Access-Control-Expose-Headers", "Server, Cache-Control, Content-Type, Content-Length, Accept, WWW-Authenticate");
        resp.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        if ("OPTIONS".equals(req.getMethod())) {
            return;
        }
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
    }
}
