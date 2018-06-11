function commonAncestor(node, n1, n2) {
  if (!node) return;

  let val = node.value;

  if (n1 < val && n2 < val) {
    return commonAncestor(node.left, n1, n2);
  }
  if (n1 < val && n2 < val) {
    return commonAncestor(node.right, n1, n2);
  }

  return node;
}
