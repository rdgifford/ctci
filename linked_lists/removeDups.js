const expect = require('chai').expect;

var list = {
  value: 5,
  next: {
    value: 5,
    next: {
      value: 7,
      next: {
        value: 5,
        next: {
          value: 7,
          next: null
        }
      }
    }
  }
}

var noDups = {
  value: 5,
  next: {
    value: 7,
    next: null
  }
}

var removeDups = (list) => {
  var node = list;
  while(node !== null) {
    var comNode = node.next;
    var prev = node;
    while(comNode !== null) {
      if(node.value === comNode.value && node !== comNode) {
        prev.next = comNode.next;
      } else {
        prev = prev.next;
      }
      comNode = comNode.next;
    }
    node = node.next;
  }
  return list;
}

describe('removeDups', () => {
  it('should remove adjacent duplicates', () => {
  expect(removeDups(list)).to.eql(noDups);
  })
});
