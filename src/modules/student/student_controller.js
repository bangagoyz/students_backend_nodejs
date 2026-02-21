const studentService = require("./student_service");

exports.search = async (req, res) => {
  try {
    const { nama, nim, ymd } = req.query;

    if (!nama && !nim && !ymd) {
      return res.status(400).json({
        message:
          "Provide one parameter ex:?nama=rizaldi or ?nim=23232 or ?ymd=123213",
      });
    }

    let result = [];

    if (nama) {
      result = await studentService.searchBy("NAMA", nama);
    }

    if (nim) {
      result = await studentService.searchBy("NIM", nim);
    }

    if (ymd) {
      result = await studentService.searchBy("YMD", ymd);
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "No students found matching the query",
      });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
