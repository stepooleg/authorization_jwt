<!doctype html>
<html>
<head>
  <title>[404] The page cannot be found</title>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  <style>
    BODY {
      background-color: white;
    }
    SECTION {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%);
    }
    IMG {
      display: block;
      margin-left: auto;
      margin-right: auto;
      border: none;
    }
  </style>
</head>
<body>
<section>
  <img src="<%=request.getContextPath()%>/img/404.jpg" alt="The page cannot be found">
</section>
</body>
</html>
