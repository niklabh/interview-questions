const intervals = [
  {
    start: 1,
    end: 2
  },
  {
    start: 4,
    end: 8
  },
  {
    start: 6,
    end: 7
  },
  {
    start: 6,
    end: 9
  },
  {
    start: 10,
    end: 11
  }
]

const mergeTimeIntervals = (intervals) => {
  const points = []

  intervals.forEach((interval) => {
    points.push({time: interval.start, type: 'start'})
    points.push({time: interval.end, type: 'end'})
  })

  points.sort((a, b) => (a.time - b.time))

  const result = []
  let temp

  points.forEach(point => {
    console.log(point)

    switch (point.type) {
      case 'start':
        if (temp && temp.start && temp.end) {
          result.push(temp)
        }

        temp = {start: point.time}
        break
      case 'end':
        if (!temp) {
          throw new Error("Invalid intervals")
        }

        temp.end = point.time
        break
    }
  })

  if (temp) {
    result.push(temp)
  }

  return result
}

console.log(mergeTimeIntervals(intervals))
