const ds = {
    id: "n1",
    name: "Lao Lao",
    title: "general manager",
    children: [
      { id: "n2", name: "Bo Miao", title: "department manager" },
      {
        id: "n3",
        name: "Su Miao",
        title: "department manager",
        children: [
          { id: "n4", name: "Tie Hua", title: "senior engineer" },
          {
            id: "n5",
            name: "Hei Hei",
            title: "senior engineer",
            children: [
              { id: "n6", name: "Dan Dan", title: "engineer" },
              { id: "n7", name: "Xiang Xiang", title: "engineer" }
            ]
          },
          { id: "n8", name: "Pang Pang", title: "senior engineer" }
        ]
      },
      { id: "n9", name: "Hong Miao", title: "department manager" },
      {
        id: "n10",
        name: "Chun Miao",
        title: "department manager",
        children: [{ id: "n11", name: "Yue Yue", title: "senior engineer" }]
      }
    ]
  };
const dataFormatChange = (ds) => {
  let output = {};
  let temp = {};
  let childList = [];
  let key = ds.id;
  
  if(ds.children){
  if(ds.children.length >0){
    childList = ds.children;
    childList.forEach(element => {
       const childFormatted =  dataFormatChange(element);
       output = {...output,...childFormatted};
    });
    
  }
  const rootChild = ds.children.map(item => {
      delete item.children;
   return {...item}
  });
  if(key){
      temp[key] = {...ds,children:rootChild};
  }
  output = {...output,...temp};
}else
{
    if(key){
        temp[key] = {...ds};
    } 
output = {...output,...temp};
}
  return output;
  
}

const finalData = dataFormatChange(ds);
console.log(finalData);
