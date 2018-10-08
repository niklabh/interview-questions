const Stack = require('./stack')

const operatorMap = {
  '+': {
    precedence: 1,
    operation: (a, b) => (a + b)
  },
  '-': {
    precedence: 1,
    operation: (a, b) => (a - b)
  },
  '/': {
    precedence: 2,
    operation: (a, b) => (a / b)
  },
  '*': {
    precedence: 2,
    operation: (a, b) => (a * b)
  }
}

const isOperand = (ch) => !isNaN(ch)

const isOperator = (ch) => operatorMap[ch]

const precedence = (ch) => operatorMap[ch] && operatorMap[ch].precedence

const process = (operand, operator) => {
  if (operator.isEmpty()) {
    throw new Error('No operator')
  }
  const op = operator.pop()
  if (operand.isEmpty()) {
    throw new Error('No Operand')
  }
  const b = operand.pop()
  if (operand.isEmpty()) {
    throw new Error('No Operand')
  }
  const a = operand.pop()

  const result = operatorMap[op].operation(a, b)

  operand.push(result)
}

const evaluate = (expression) => {
  const operand = new Stack()
  const operator = new Stack()

  for (let i = 0; i < expression.length; i++) {
    const ch = expression[i]

    if (isOperand(ch)) {
      operand.push(parseInt(ch))
    } else if (isOperator(ch)) {
      while (!operator.isEmpty() && precedence(operator.peek()) >= precedence(ch)) {
        process(operand, operator)
      }
      operator.push(ch)
    } else if (ch === '(') {
      operator.push(ch)
    } else if (ch === ')') {
      while (operator.peek() !== '(') {
        if (ch === ')') {
          throw new Error('Invalid')
        }
        if (operator.isEmpty()) {
          throw new Error('Invalid')
        }
        process(operand, operator)
      }
      operator.pop(ch)
    } else {
      throw new Error('Invalid expression')
    }
  }

  while (!operator.isEmpty()) {
    process(operand, operator)
  }

  return operand.pop()
}

if (require.main === module) {
  console.log(evaluate('1+2*(6-3)/2'))
}
