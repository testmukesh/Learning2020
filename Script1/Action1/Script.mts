
msgbox "Welcome to Calculator"

n1 = inputbox ("Enter 1st No : ")
n2 = inputbox ("Enter 2nd No : ")
x = 1
Do while (x=1) 
ch = inputbox ("Enter Your Choice: (1: Add , 2: Sub , 3: Mul , 4: Div) : ")

Select Case ch
	Case 1:
		msgbox add(n1, n2)
	Case 2:
		msgbox subtract(n1,n2)
	Case 3:
		msgbox multiply(n1,n2)
	Case 4:
		msgbox division(n1,n2)
	Case default:
		msgbox "Invalid Choice"
End Select
x = inputbox ("Do you want to continue (1: Yes , 0: No ")
Loop

