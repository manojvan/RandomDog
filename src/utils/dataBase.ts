import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

export const getDBConnection = async () => {
  return SQLite.openDatabase({name: 'RandomDogs.db', location: 'default'});
};

export const createTable = async () => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS dogs (
      imgUrl TEXT NOT NULL
    );`;
  let db = await getDBConnection();
  await db.executeSql(query);
};

export const saveDog = async value => {
  let db = await getDBConnection();
  let savedDogList = await getDogs();
  if (savedDogList.length > 19) {
    let imgUrl = savedDogList[0];
    const delQuery = `DELETE FROM dogs WHERE imgUrl=?`;
    let response = await db.executeSql(delQuery, [imgUrl]);
  }
  const query = `INSERT INTO dogs (imgUrl) VALUES (?)`;
  await db.executeSql(query, [value]);
};

export const getDogs = async () => {
  const query = `SELECT imgUrl FROM dogs`;
  let db = await getDBConnection();
  let res = await db.executeSql(query);
  if (res.length > 0) {
    let dogArr = [];
    let len = res[0].rows?.length;
    for (let currCount = 0; currCount < len; currCount++) {
      let {imgUrl = ''} = res[0].rows?.item(currCount);
      dogArr.push(imgUrl);
    }
    return dogArr;
  } else {
    return [];
  }
};

export const clearRecords = async () => {
  const query = `DELETE FROM dogs`;
  let db = await getDBConnection();
  let res = await db.executeSql(query);
};
