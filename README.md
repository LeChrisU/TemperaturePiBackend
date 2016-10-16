# TemperaturePiBackend
Python and Node.js / Express.js based Backend for Temperature Pi Home Project.

The python script included in /python reads temperature and humidity from the USB-WDE1 receiver (http://www.elv.de/-353.html) which is hooked up to an outside sensor (http://www.elv.de/elv-funk-aussensensor-ash-2200-fuer-z-b-usb-wde-1-ipwe-1.html) and commits it to a MySQL server.

The node.js backend allows easy access to the data stored by serving a REST API through express.js and sequelize.js.

# Usage
1. Install Node.js from https://nodejs.org/en/
2. Configure your MySQL Database into `config/config.json`
3. Use the Database scheme given in `models/TempHumidity.js` or use sequelize-cli (https://github.com/sequelize/cli) to generate a scheme for your database
4. Run `node app.js` or for background usage run `nohup node app.js &`

# Demo
A live demo of the resulting JSON can be seen at http://mypi.chris-ullrich.de/weather.

An example how to visualize the data can be found at http://weatherpi.chris-ullrich.de.

The repository containing the front end project can be visited at https://github.com/LeChrisU/TemperaturePiFrontend.
