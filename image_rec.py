# SmartArm || UoftHacks 2018 Submission
# Uses Microsoft Cognitive Services API
# Author: Hamayal Choudhry, Rashmeet Singh 
# Date: January 21, 2018            

import httplib, urllib, base64, json

###############################################
#### Update or verify the following values. ###
###############################################

# Replace the subscription_key string value with your valid subscription key.
subscription_key = '418ad717ef5040b38d8ce8781ddfa369'

# Replace or verify the region.
#
# You must use the same region in your REST API call as you used to obtain your subscription keys.
# For example, if you obtained your subscription keys from the westus region, replace 
# "westcentralus" in the URI below with "westus".
#
# NOTE: Free trial subscription keys are generated in the westcentralus region, so if you are using
# a free trial subscription key, you should not need to change this region.
uri_base = 'https://eastus.api.cognitive.microsoft.com/vision/v1.0'

#import serial
#,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,ser = serial.Serial('/dev/ttyUSB0', 9600)

# Prompts camera to turn on, take picture, and save a .jpg file
import cv2
camera_port = 0 
ramp_frames = 30 
camera = cv2.VideoCapture(camera_port)
def get_image():
 retval, im = camera.read()
 return im 
for i in xrange(ramp_frames):
 temp = camera.read()

camera_capture = get_image()
filename = "img.jpg"
cv2.imwrite(filename,camera_capture)
del(camera)

headers = {
    # Request headers.
    'Content-Type': 'application/octet-stream',
    'Ocp-Apim-Subscription-Key': subscription_key,
}

params = urllib.urlencode({
    # Request parameters. All of them are optional.
    'visualFeatures': 'Categories,Description,Color',
    'language': 'en',
})

# The URL of a JPEG image to analyze.
req_body = open('img.jpg', 'rb').read()


try:
    # Execute the REST API call and get the response.
    conn = httplib.HTTPSConnection('eastus.api.cognitive.microsoft.com')
    conn.request("POST", "/vision/v1.0/analyze?%s" % params, body=req_body, headers=headers)
    response = conn.getresponse()
    data = response.read()

    # Objects that vary by graspability
    obj1 = "bottle"
    obj2 = "cup"
    obj3 = "pen"

    # 'data' contains the JSON data. The following formats the JSON data for display.
    parsed = json.loads(data)
    # list of tags seen in object recognition
    tags = parsed["description"]["tags"]
    
    
    # Determines type of object and sets the type of grasp
    if obj1 in tags:
    #ser.write('1')
    print("Bottle Detected");
    elif obj2 in tags:
    #ser.write('2')
    print("Cup Detected");
    elif obj3 in tags:
    #ser.write('2')
        print("Pen Detected");
    conn.close()

except Exception as e:
    print('Error: Ungraspable object has been presented')
    print(e)


