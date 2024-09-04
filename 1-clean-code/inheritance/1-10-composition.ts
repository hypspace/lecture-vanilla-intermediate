// 위임(컴포지션)
class Printer {
  private printerHeader: PrinterHeader
  constructor(printerHeader?: PrinterHeader) {
    this.printerHeader = printerHeader
      ? printerHeader
      : new DefaultPrintHeader()
  }
  print() {
    this.printerHeader.print()
  }
}

interface PrinterHeader {
  print(): void
}

class DefaultPrintHeader implements PrinterHeader {
  print() {
    console.log('기본 출력!')
  }
}

class Network {
  send() {} // 다중 상속 불가! - 컴포지션으로 대체함
}

class ColorPrinterHeader implements PrinterHeader {
  print() {
    console.log('컬러 출력!')
  }
}

class BraillePrinterHeader implements PrinterHeader {
  print() {
    console.log('점자 출력!')
  }
}

const printerHeaders = [
  new Printer(),
  new Printer(new ColorPrinterHeader()),
  new Printer(new BraillePrinterHeader()),
]
printerHeaders.forEach(header => header.print())
