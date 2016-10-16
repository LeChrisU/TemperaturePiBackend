#!/usr/bin/python -u

import serial
import sys
import os
from datetime import datetime
import MySQLdb

port = '/dev/ttyUSB0'

def main():
 db = MySQLdb.connect(host = "localhost", user = "", passwd = "", db = "Weather")
 cur = db.cursor()

 ser = serial.Serial(port,9600)
 if not ser.isOpen():
  print "Unable to open serial port %s" % port
  sys.exit(1)

 while(1==1):
  line = ser.readline()
  line = line.split(';')
  l = list(line)
  #print "Weather at %s is %s Degree Celsius with %s %% humidity" % (str(datetime.now()), str(l[3]).replace(",","."), l[11]) 
  cur.execute("INSERT INTO TempHumidity (DateTime,TemperatureC,HumidityP) VALUES (%s,%s,%s)",(str(datetime.now()), str(l[3]).replace(",","."), l[11]))
  db.commit()

if __name__ == '__main__':
 main()
