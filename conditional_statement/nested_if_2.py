age = int(input("Age: "))
id = str(input("Has ID? ")).lower()

if age>=18:
    if id=="yes":
        print("Allowed")
    else:
        print("Not Allowed")
else:
    print("Not Allowed")