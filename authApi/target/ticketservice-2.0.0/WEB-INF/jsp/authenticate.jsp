<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="ru">
<head>
  <meta charset="utf-8" content="text/html"/>
  <meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
  <style type="text/css">
    BODY {
      background-color: white;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 13px;
    }
    .centered {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }
    .dialog {
      width: 500px;
      border: 1px solid #0060A9;
    }
    .dialog-hdr {
      color: #ffffff;
      background-color: #0060A9;
      padding: 2px 6px;
      text-align: left;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 13px;
      font-weight: bold;
    }
    .dialog-logo {
      display: none;
    }
    .dialog-body {
      border-top: 3px solid #0060A9;
      border-bottom: 3px solid #0060A9;
      min-height: 80px;
      padding: 5px;
      font-size: 1.0em;
    }

    .auth-state-processing .auth-top-hdr {
      color: black;
    }
    .auth-state-fail .auth-top-hdr {
      color: darkred;
    }
    .auth-state-success .auth-top-hdr {
      color: green;
    }

    .auth-hdr {
      font-weight: bold;
      padding: 5px;
    }
    .auth-messages {
      border-top: 1px solid silver;
      border-bottom: 1px solid silver;
      margin: 5px;
    }
    .auth-messages LI {
      font-style: italic;
      color: darkred;
    }
    #auth-details-toggler {
      display: inline-block;
      margin: 2px 6px;
      padding-right:16px;
      font-size: 12px;
      font-weight: normal;
      cursor: pointer;
      user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      background-image: url('<%=request.getContextPath()%>/img/expand.png');
      background-repeat: no-repeat;
      background-position: right center;
    }
    .auth-details-info {
      display: none;
      font-weight: normal;
    }
    .auth-details-info DIV {
      line-height: 20px;
      white-space: nowrap;
    }
    .auth-param {
      display: inline-block;
      width: 110px;
    }
    .auth-param:after {
      content: ":";
    }
    .auth-param-value {
      margin: 2px;
      background-color: #FDFFE4;
      font-family: monospace;
      white-space: nowrap;
    }
    .auth-details-opened #auth-details-toggler {
      background-image: url('<%=request.getContextPath()%>/img/collapse.png');
    }
    .auth-details-opened .auth-details-info {
      display: block;
    }

    .auth-loginform {
      display: inline-block;
      width: 360px;
      margin-left: 60px;
    }
    .auth-loginform .auth-form-row {
      line-height: 30px;
    }
    .auth-loginform LABEL {
      display: inline-block;
      width: 150px;
    }
    .auth-loginform LABEL:after {
      content: "*";
      padding: 0 4px;
      color: red;
    }
    .auth-loginform INPUT {
      width: 200px;
      border: 1px solid gray;
    }
    .auth-loginform .auth-toolbar {
      width: 355px;
      text-align: right;
      border-top: 1px solid gray;
      margin-top: 4px;
      padding: 6px 0;
    }
    .auth-loginform .auth-toolbar BUTTON {
      margin-left : 5px;
      min-width: 80px;
    }
    .auth-cancel-button {
      color: white;
      font-weight: bold;
      padding: 5px 10px;
      border:1px solid #cacaca; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;
      /*font-size:12px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;font-weight:bold; color: #FFFFFF;*/
      background-color: #E6E6E6; background-image: -webkit-gradient(linear, left top, left bottom, from(#E6E6E6), to(#CCCCCC));
      background-image: -webkit-linear-gradient(top, #E6E6E6, #CCCCCC);
      background-image: -moz-linear-gradient(top, #E6E6E6, #CCCCCC);
      background-image: -ms-linear-gradient(top, #E6E6E6, #CCCCCC);
      background-image: -o-linear-gradient(top, #E6E6E6, #CCCCCC);
      background-image: linear-gradient(to bottom, #E6E6E6, #CCCCCC);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#E6E6E6, endColorstr=#CCCCCC);
    }

    .auth-cancel-button:hover{
      border:1px solid #b3b3b3;
      background-color: #cdcdcd; background-image: -webkit-gradient(linear, left top, left bottom, from(#cdcdcd), to(#b3b3b3));
      background-image: -webkit-linear-gradient(top, #cdcdcd, #b3b3b3);
      background-image: -moz-linear-gradient(top, #cdcdcd, #b3b3b3);
      background-image: -ms-linear-gradient(top, #cdcdcd, #b3b3b3);
      background-image: -o-linear-gradient(top, #cdcdcd, #b3b3b3);
      background-image: linear-gradient(to bottom, #cdcdcd, #b3b3b3);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#cdcdcd, endColorstr=#b3b3b3);
    }

    .auth-submit-button {
      color: white;
      font-weight: bold;
      padding: 5px 10px;
      border:1px solid #7eb9d0; -webkit-border-radius: 3px; -moz-border-radius: 3px;border-radius: 3px;
      /*font-size:12px;font-family:arial, helvetica, sans-serif; padding: 10px 10px 10px 10px; text-decoration:none; display:inline-block;font-weight:bold; color: #FFFFFF;*/
      background-color: #a7cfdf; background-image: -webkit-gradient(linear, left top, left bottom, from(#a7cfdf), to(#23538a));
      background-image: -webkit-linear-gradient(top, #a7cfdf, #23538a);
      background-image: -moz-linear-gradient(top, #a7cfdf, #23538a);
      background-image: -ms-linear-gradient(top, #a7cfdf, #23538a);
      background-image: -o-linear-gradient(top, #a7cfdf, #23538a);
      background-image: linear-gradient(to bottom, #a7cfdf, #23538a);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#a7cfdf, endColorstr=#23538a);
    }

    .auth-submit-button:hover{
      border:1px solid #5ca6c4;
      background-color: #82bbd1; background-image: -webkit-gradient(linear, left top, left bottom, from(#82bbd1), to(#193b61));
      background-image: -webkit-linear-gradient(top, #82bbd1, #193b61);
      background-image: -moz-linear-gradient(top, #82bbd1, #193b61);
      background-image: -ms-linear-gradient(top, #82bbd1, #193b61);
      background-image: -o-linear-gradient(top, #82bbd1, #193b61);
      background-image: linear-gradient(to bottom, #82bbd1, #193b61);filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#82bbd1, endColorstr=#193b61);
    }
  </style>
  <%if (request.getAttribute("themeUrl") != null) {%>
  <link rel="stylesheet" type="text/css" href="<%=request.getAttribute("themeUrl")%>" charset="UTF-8"/>
  <%} %>
  <script type="text/javascript" src="<%=request.getAttribute("jsUrl")%>"></script>
</head>
<body">

<div class="dialog centered">
  <div class="dialog-hdr"><span class="dialog-title"></span></div>
  <div class="dialog-logo"></div>
  <div class="dialog-body" id="auth-pane">
    <!--
    <div class="auth-state-success">
      <div class="auth-hdr auth-top-hdr">Не удалось войти в систему.</div>
      <ul class="auth-messages">
        <li>Сертификат заблокирован или не найден</li>
      </ul>
      <div class="auth-hdr auth-bottom-hdr">По вопросам работы в системе просим обращаться в службу сопровождения.</div>
    </div>
    -->
  </div>
</div>

</body>
</html>
