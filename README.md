#Text generator 


##How to use: 

-Endpoint => /api/text-generator
-Headers:
    -apikey: string => api key generated from api/auth/apikey
-Method:

-Response: 
    -Status Code: 200 OK
    Description: Respuesta exitosa con texto generado.
    Body:
      {
        "generated_text": "string"
      }