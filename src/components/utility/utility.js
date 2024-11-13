const filterData = async (data, category) => {
  const result = data.map((data) => {
    return data[category].filter((eachData) => {
      if (eachData.title !== "[Removed]" && eachData.content !== "[Removed]") {
        return eachData;
      }
    });
  });
  console.log(result);
  return result;
};

export default filterData;
