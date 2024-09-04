// 상속
class Printer {
  print() {
    console.log('기본 출력!')
  }
}

class Network {
  send() {} // 다중 상속 불가! - 컴포지션으로 대체함
}

class ColorPrinter extends Printer {
  print() {
    console.log('컬러 출력!')
  }
}

const printers = [new Printer(), new ColorPrinter()]
printers.forEach(printer => printer.print())
