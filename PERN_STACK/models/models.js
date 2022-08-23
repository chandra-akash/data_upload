// const client = require("../index");
// async () => {
//   client.query(
//     ` CREATE TABLE "public"."anups_work" (
//         "filecontent" character varying(150),
//         "filename" character varying(50),
//         "isSpecial" character varying(10)
//         ) WITH (oids = false)`,
//     (err, res) => {
//       if (err) throw err;
//       console.log(res);
//       client.end();
//     }
//   );
// };
// module.exports = {
//   push_value_in_db: async (query_arr) => {
//     console.log("Post Request in Model", query_arr);
//     client.query(
//       `INSERT INTO anups_work(filecontent, filename, isSpecial)
//       VALUES($1, $2, $3) RETURNING filename`,
//       [query_arr.filecontent, query_arr.filename, query_arr.isSpecial],
//       (err, res) => {
//         console.log(err ? err.stack : res);
//         client.end();
//       }
//     );
//   },
// };


const db = require("../configuration/dbConn");
module.exports = {
  push_value_in_db: async (fcont,fname,isSpecl) => {
    console.log("Post Request in Model", fcont,fname,isSpecl);
    return new Promise(function (resolve, reject) {
      db.any(
        `INSERT INTO anups_work(filecontent,filename,isspecial)
         VALUES($1,$2,$3) RETURNING filename`,
        [fcont,fname,isSpecl]
      )
      .then(function (data) {
        if (data.length > 0) resolve({ success: true, data: data });
        else resolve({ success: false, data: data });
      })
      .catch(function (err) {
        reject(err);
      });
    });
  },
};