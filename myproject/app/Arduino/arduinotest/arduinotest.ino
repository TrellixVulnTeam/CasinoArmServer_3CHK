
void setup() {
  // put your setup code here, to run once:
  pinMode(A0, INPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  int x = analogRead(A0);
  int pri = map(x, 0, 1024, 0, 100);
  Serial.println(pri);
}
