var SerialPort = require('serialport')
//Opening a Port
var serialPort = new SerialPort('COM4', {
    //波特率，可在设备管理器中对应端口的属性中查看
    baudRate : 9600,
    autoOpen:false
})

//连接串口后进行写入指令操作
serialPort.open(function (err) {
    console.log('IsOpen:',serialPort.isOpen)
    console.log('err:',err)
    if(!err){
        //16进制Buffer流
        // const buf1 = new Buffer("01050000ff008C3A","hex") //打开红灯
        // const buf11 = new Buffer("010500000000CDCA","hex") //关闭红灯
		const buf1 = new Buffer.from(":000200000ee8~")
		// const buf2 = new Buffer(":000200000ee8~")
		// const buf3 = new Buffer(":001000000ee9~")
        // const bufs = [buf1,buf2,buf3]
		const bufs = [buf1]
        // const bufs = [buf11,buf21,buf31]
        var i = 0
        eachWrite(bufs[i])
        function eachWrite(item) {
            console.log("RX-->" + item.toString())
            serialPort.write(item, function (error, result) {
                i++
                if(i>=bufs.length)return
                //指令是一条一条下发的
                setTimeout(function () {
                    eachWrite(bufs[i])
                },40)
            })
        }
    }
})

//指令监听
var str = ""
serialPort.on('data',function (data) {
	data = data.toString()
	str = str + data
	if(data == "~"){
		// console.log(typeof(data))
		// console.log('data received: '+data)
		console.log("TX-->" + str)
	}
	
})

//错误监听
serialPort.on('error',function (error) {
    console.log('error: '+error)
})