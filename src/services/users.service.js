import customer148 from  "@/data/Customer1.js";
import customer89 from  "@/data/Customer2.js";

const users = [
  customer89,
  customer148,
];

export function findUserBySaleId(saleId) {
  const usersMap = new Map();

  const sales = users.reduce((acc, cur) => {
    for (const sale of cur.sales) {
      acc.set(sale.id, cur.custInfo['Id'])
    }

    return acc;
  }, usersMap);

  return sales.get(saleId);
}

export function getUser(userId) {
  return users.find((user) => user.custInfo['Id'] === userId)
}