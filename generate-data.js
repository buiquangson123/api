var casual = require("casual");
var fs = require("fs");
const { isBuffer } = require("util");

casual.locale = "vi";

const randomCate = (n) => {
  if (n <= 0) return [];

  const categoryList = [];

  Array.from(new Array(n)).forEach(() => {
    const cateList = {
      id: casual.uuid,
      name: casual.name,
      userName: casual.username,
      firstName: casual.first_name,
      lastName: casual.last_name,
      fullName: casual.full_name,
      phone: casual.phone,
    };

    categoryList.push(cateList);
  });

  return categoryList;
};

const randomPro = (cateList, number) => {
  if (number <= 0) return [];
  const productList = [];

  for (let cate of cateList) {
    Array.from(new Array(number)).forEach(() => {
      const pro = {
        categoryId: cate.id,
        id: casual.uuid,
        name: casual.nameProduct,
        color: casual.color_name,
        des: casual.description,
        title: casual.title,
        createdAt: Date.now(),
      };

      productList.push(pro);
    });
  }

  return productList;
};

(() => {
  // random data
  const cateList = randomCate(5);
  const proList = randomPro(cateList, 5);

  // DB
  const db = {
    categories: cateList,
    products: proList,
    profile: {
      name: "Pro",
    },
  };

  // Write file DB to db.json
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("Random data thành công!");
  });
})();
