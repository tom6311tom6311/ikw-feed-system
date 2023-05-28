const interleave = (arr1: any[], arr2: any[]) => {
  const ret: any[] = [];
  arr1.forEach((item, idx) => {
    ret.push(item);
    if (arr2[idx]) {
      ret.push(arr2[idx]);
    }
  });
  return ret;
};

export default {
  interleave,
};
