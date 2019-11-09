function sum(node) {
  if (!node.children) return node.value;
  return (
    node.value + node.children.map(child => sum(child)).reduce((a, b) => a + b)
  );
}

const node5 = {
  value: 8,
  children: null
};
const node4 = {
  value: 7,
  children: null
};
const node3 = {
  value: 2,
  children: [node4, node5]
};
const node2 = {
  value: 3,
  children: null
};
const node1 = {
  value: 4,
  children: null
};
const node0 = {
  value: 5,
  children: [node1, node2, node3]
};

console.log(sum(node0)); // 29
