const model = require("../models/models");

const arr = [
  {
    filecontent: "Hexa",
    filename: "Anup",
    isSpecial: "false",
  },
  {
    filecontent: "Hexa",
    filename: "Akash",
    isSpecial: "true",
  },
];

module.exports = {
  getHello: async (req, res, next) => {
    console.log("Hi I'm Controller");
    res
      .status(200)
      .json({
        status: 1,
        data: "Getting Hello From Controller",
      })
      .end();
  },

  push_value_in_db: async (req, res, next) => {
    // console.log("Post Request in Controller", arr);
    let {filecontent, filename, isSpecial} = req.body;
    // console.log("Body==>", req.body);
    // console.log("filecontent==>", filecontent);
    // return true;
    let Error = "";
    try {
      // let fcont = "";
      // let fname = "";
      // let isSpecl = "";
      // if (arr.length > 0) {
      //   for (let i = 0; i < arr.length; i++) {
      //     let fcont = "";
      //     let fname = "";
      //     let isSpecl = "";

      //     fcont = arr[i].filecontent;
      //     fname = arr[i].filename;
      //     isSpecl = arr[i].isSpecial;

          await model
            .push_value_in_db(filecontent, filename, isSpecial)
            .then(async function (data) {
              res
                .status(200)
                .json({
                  status: 1,
                  data: data,
                })
                .end();
            })
            .catch((err) => {
              console.log(err);
              Error = err;
              res
                .status(400)
                .json({
                  status: 3,
                  message: Error,
                })
                .end();
            });
      //   }
      // }
    } catch (err) {
      console.log(err);
      Error = err;
      res
        .status(400)
        .json({
          status: 3,
          message: Error,
        })
        .end();
    }
  },
};
