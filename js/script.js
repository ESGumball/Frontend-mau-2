<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Ẩn/Hiện bằng Checkbox</title>
  <style>
    #toggle {
      display: none;
    }

    .content {
      display: none;
      margin-top: 10px;
      padding: 10px;
      background-color: #f0f0f0;
      border-radius: 5px;
    }

    #toggle:checked + label + .content {
      display: block;
    }

    label {
      display: inline-block;
      padding: 10px 15px;
      background-color: #4CAF50;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }

    label:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>

  <input type="checkbox" id="toggle">
  <label for="toggle">Hiện / Ẩn nội dung</label>

  <div class="content">
    <p>Đây là nội dung có thể ẩn hiện bằng checkbox và CSS!</p>
  </div>

</body>
</html>
