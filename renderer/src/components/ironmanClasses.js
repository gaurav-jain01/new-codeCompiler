
const lessons = [
  {
    classNum: 1,
    title: "Ironman's Chest Arc Light",
    moretitle: "Ironman's Chest Arc Light- One LED Flashing {Pin D8}",
    icon: "💡",
    description: "LED flashes on and off like Ironman's glowing chest arc.",
    badges: ["⚡ Arc LED (D8)"],
    video: "https://youtu.be/YOy_qz3WSFE?si=e9CEiBLJlw8GI_4k",
    story: "Ironman Says: 'This makes my suit light blink like a heartbeat! Great for a dramatic entrance!'",
    steps: [
      {
        title: "🖐️ Step 1 – Prepare My Chest Arc Light!",
        narration: "Pin D8, you’re in charge of my chest arc! Get ready to light up!",
        arduino: "pinMode(8, OUTPUT);",
        commentary: ""
      },
      {
        title: "🔁 Step 2 – Start the Power Loop!",
        narration: "This keeps my arc pulsing again and again!",
        arduino: "void loop() {",
        commentary: ""
      },
      {
        title: "💡 Step 3 – Light It Up!",
        narration: "Arc light ON – I’m glowing with power!",
        arduino: "digitalWrite(8, HIGH);",
        commentary: ""
      },
      {
        title: "⏳ Step 4 – Hold That Glow!",
        narration: "Stay ON for 1 second – make it bright and steady.",
        arduino: "delay(1000);",
        commentary: ""
      },
      {
        title: "⚫ Step 5 – Power Down the Arc!",
        narration: "Time to turn OFF the light!",
        arduino: "digitalWrite(8, LOW);",
        commentary: ""
      },
      {
        title: "⏳ Step 6 – Rest Before Recharging!",
        narration: "Wait for another second… then power up again!",
        arduino: "delay(1000);",
        commentary: ""
      }
    ],
    code: `
void setup() {
  pinMode(8, OUTPUT);
}
void loop() {
  digitalWrite(8, HIGH);
  delay(1000);
  digitalWrite(8, LOW);
  delay(1000);
}`
  },
  {
    classNum: 2,
    title: "Chest Pulse Light",
    moretitle: "Chest Pulse Light - Quick Blinking (Pin D2)",
    icon: "💓",
    description: "Arc Reactor glows quickly like a heartbeat.",
    badges: ["⚡ Arc LED (D2)"],
    video: "https://youtu.be/MwecsKuw4AY?si=sQakJn_p0fC-wQYf",
    story: "Ironman Says: 'This makes my Arc Reactor pulse like a heartbeat! Short delays = quick flashing <3.'",
    steps: [
      {
        title: "🖐️ Step 1 – Get My Arc Light Ready!",
        narration: "Pin D2 powers my fast-flashing chest light!",
        arduino: "pinMode(2, OUTPUT);",
        commentary: ""
      },
      {
        title: "💡 Step 2 – Light Up Quickly!",
        narration: "Turn ON the Arc Light – flash time!",
        arduino: "digitalWrite(2, HIGH);",
        commentary: ""
      },
      {
        title: "⏳ Step 3 – Quick Pulse!",
        narration: "Keep it ON for 0.2 seconds!",
        arduino: "delay(200);",
        commentary: ""
      },
      {
        title: "⚫ Step 4 – Turn Off!",
        narration: "Now turn OFF the light.",
        arduino: "digitalWrite(2, LOW);",
        commentary: ""
      },
      {
        title: "⏳ Step 5 – Short Break!",
        narration: "Rest for a moment before flashing again!",
        arduino: "delay(200);",
        commentary: ""
      }
    ],
    code: `
void setup() {
  pinMode(2, OUTPUT);
}
void loop() {
  digitalWrite(2, HIGH);
  delay(200);
  digitalWrite(2, LOW);
  delay(200);
}`
  },
  {
    classNum: 3,
    title: "Laser Blaster Activation",
    moretitle: "Laser Blaster Activation (Pin D4)",
    icon: "🔴",
    description: "Red laser beam flashes with pew pew sound effects.",
    badges: ["⚡ Laser Diode (D4)"],
    video: "https://youtu.be/GNjo0cxJbuo?si=Zmcn-XV2q9MwiuUp",
    story: "Ironman Says: 'Zap! This code makes my laser blaster fire in bursts. Pew pew!'",
    steps: [
      {
        title: "🖐️ Step 1 – Load Up My Laser!",
        narration: "Pin D4 is my hand blaster! Let’s get it ready!",
        arduino: "pinMode(4, OUTPUT);",
        commentary: ""
      },
      {
        title: "💥 Step 2 – Fire The Beam!",
        narration: "ZAP! Laser ON!",
        arduino: "digitalWrite(4, HIGH);",
        commentary: ""
      },
      {
        title: "⏳ Step 3 – Hold The Shot!",
        narration: "Keep firing for half a second!",
        arduino: "delay(500);",
        commentary: ""
      },
      {
        title: "⚫ Step 4 – Stop Firing!",
        narration: "Turn off the beam.",
        arduino: "digitalWrite(4, LOW);",
        commentary: ""
      },
      {
        title: "⏳ Step 5 – Recharge My Laser!",
        narration: "Wait before blasting again.",
        arduino: "delay(500);",
        commentary: ""
      }
    ],
    code: `
void setup() {
  pinMode(4, OUTPUT);
}

void loop() {
  digitalWrite(4, HIGH);
  delay(500);
  digitalWrite(4, LOW);
  delay(500);
}`
  },
  {
    classNum: 4,
    title: "Blink Ironman's Eyes",
    moretitle: "Blink Ironman's Eyes (Pin D7)",
    icon: "👁️",
    description: "Glowing eyes blinking like surveillance mode.",
    badges: ["⚡ Eyes LED (D7)"],
    video: "https://youtu.be/wQGNp3x3vV4?feature=shared",
    story: "Ironman Says: 'My eyes light up when I scan for danger! Watch them blink steadily.'",
    steps: [
      {
        title: "👁️ Step 1 – Activate Eye Vision!",
        narration: "Pin D7 controls my glowing eyes!",
        arduino: "pinMode(7, OUTPUT);",
        commentary: ""
      },
      {
        title: "💡 Step 2 – Scan Mode On!",
        narration: "Eyes are ON – scanning surroundings!",
        arduino: "digitalWrite(7, HIGH);",
        commentary: ""
      },
      {
        title: "⏳ Step 3 – Keep Eyes Open!",
        narration: "Hold the scan for 0.5 seconds!",
        arduino: "delay(500);",
        commentary: ""
      },
      {
        title: "⚫ Step 4 – Blink OFF!",
        narration: "Eyes OFF for a blink.",
        arduino: "digitalWrite(7, LOW);",
        commentary: ""
      },
      {
        title: "⏳ Step 5 – Pause Between Scans!",
        narration: "Take half a second break before next scan!",
        arduino: "delay(500);",
        commentary: ""
      }
    ],
    code: `
void setup() {
  pinMode(7, OUTPUT);
}

void loop() {
  digitalWrite(7, HIGH);
  delay(500);
  digitalWrite(7, LOW);
  delay(500);
}`
  },
  {
    classNum: 5,
    title: "Flying Light",
    moretitle: "Flying Light (Pin D3)",
    icon: "🚀",
    description: "Boot jet lights turning on and off in sync.",
    badges: ["⚡ Flight LED (D3)"],
    video: "https://youtu.be/9PS6PgWy_bo?feature=shared",
    story: "Ironman Says: 'Time to take off! This light shows my flight system is activated.'",
    steps: [
      {
        title: "🚀 Step 1 – Get Flight Mode Ready!",
        narration: "Pin D3 will light up my flying jets!",
        arduino: "pinMode(3, OUTPUT);",
        commentary: ""
      },
      {
        title: "🔥 Step 2 – Jet Power ON!",
        narration: "Boot jets ON – let’s fly!",
        arduino: "digitalWrite(3, HIGH);",
        commentary: ""
      },
      {
        title: "⏳ Step 3 – Keep Power Flowing!",
        narration: "Stay powered for 1 full second!",
        arduino: "delay(1000);",
        commentary: ""
      },
      {
        title: "⚫ Step 4 – Power OFF!",
        narration: "Jets OFF – cooling down.",
        arduino: "digitalWrite(3, LOW);",
        commentary: ""
      },
      {
        title: "⏳ Step 5 – Rest Then Fly Again!",
        narration: "Wait for 1 second before next launch.",
        arduino: "delay(1000);",
        commentary: ""
      }
    ],
    code: `
void setup() {
  pinMode(3, OUTPUT);
}

void loop() {
  digitalWrite(3, HIGH);
  delay(1000);
  digitalWrite(3, LOW);
  delay(1000);
}`
  },
  {
    classNum: 7,
    title: "Eye Button Control",
    moretitle: "Eye Button Control (Pins D7 & D8)",
    icon: "🔘",
    description: "Both eyes blink alternately like Ironman's targeting ARC system activation.",
    badges: ["⚡ Eyes LED (D7)", "⚡ Arc Radiator LED 1 (D8)"],
    video: "https://youtu.be/Ot3We_-vOLg?feature=shared",
    story: "Ironman Says: \"Now both eyes blink one after the other! My scanning system is in full action with arc activation!\"",
    steps: [
      {
        title: "👁️ Step 1 – Activate My Eyes & Arc!",
        narration: "Get both systems ready – eye scan and arc power!",
        arduino: "pinMode(7, OUTPUT);\npinMode(8, OUTPUT);",
        commentary: ""
      },
      {
        title: "💡 Step 2 – Turn ON Eyes, OFF Arc!",
        narration: "My eyes light up first while arc stays off.",
        arduino: "digitalWrite(7, HIGH);\ndigitalWrite(8, LOW);",
        commentary: ""
      },
      {
        title: "⏳ Step 3 – Pause a Bit",
        narration: "Let the eyes blink for 0.3 seconds.",
        arduino: "delay(300);",
        commentary: ""
      },
      {
        title: "⚡ Step 4 – Now Arc ON, Eyes OFF!",
        narration: "Switch to arc glow!",
        arduino: "digitalWrite(7, LOW);\ndigitalWrite(8, HIGH);",
        commentary: ""
      },
      {
        title: "⏳ Step 5 – Hold Again",
        narration: "Now arc glows for 0.3 seconds before repeating.",
        arduino: "delay(300);",
        commentary: ""
      }
    ],
    code: `
void setup() {
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
}

void loop() {
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
  delay(300);
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
  delay(300);
}`
  },
  {
    classNum: 8,
    title: "Laser Eyes",
    moretitle: "Laser Eyes (Pins D4 & D7)",
    icon: "🔫",
    description: "Both eyes flash like laser beams simultaneously.",
    badges: ["⚡ Laser (D4)", "⚡ Eyes LED (D7)"],
    video: "https://youtu.be/deMPSB9jNdc?feature=shared",
    story: "Ironman Says: \"Time to fire twin laser beams! These eyes are fully loaded.\"",
    steps: [
      {
        title: "🔫 Step 1 – Ready Both Lasers!",
        narration: "Eyes and laser cannons are activated!",
        arduino: "pinMode(4, OUTPUT);\npinMode(7, OUTPUT);",
        commentary: ""
      },
      {
        title: "🔴 Step 2 – Fire The Beams!",
        narration: "ZAP! Both lights fire together!",
        arduino: "digitalWrite(4, HIGH);\ndigitalWrite(7, HIGH);",
        commentary: ""
      },
      {
        title: "⏳ Step 3 – Hold Laser Glow",
        narration: "Hold for half a second.",
        arduino: "delay(500);",
        commentary: ""
      },
      {
        title: "⚫ Step 4 – Power OFF",
        narration: "Shut them down!",
        arduino: "digitalWrite(4, LOW);\ndigitalWrite(7, LOW);",
        commentary: ""
      },
      {
        title: "⏳ Step 5 – Recharge Time",
        narration: "Take a break before the next blast!",
        arduino: "delay(500);",
        commentary: ""
      }
    ],
    code: `
void setup() {
  pinMode(4, OUTPUT);
  pinMode(7, OUTPUT);
}

void loop() {
  digitalWrite(4, HIGH);
  digitalWrite(7, HIGH);
  delay(500);
  digitalWrite(4, LOW);
  digitalWrite(7, LOW);
  delay(500);
}`
  },
  {
    classNum: 9,
    title: "Cycle RGB Colors",
    moretitle: "Cycle RGB Colors (Pins D5, D6, D9)",
    icon: "🌈",
    description: "The RGB LED glows Red → Green → Blue, each color stays on for 1 second.",
    badges: ["⚡ RGB RED (D5)", "⚡ RGB GREEN (D6)", "⚡ RGB BLUE (D9)"],
    video: "",
    story: "Ironman Says: \"Watch my rainbow reactor change colors like magic!\"",
    steps: [
      {
        title: "🔌 Step 1 – Power Up My Light Ports",
        narration: "Red blaster is ready to shine!",
        arduino: "pinMode(5, OUTPUT);",
        commentary: ""
      },
      {
        title: "💚 Step 2 – Green Beam Online",
        narration: "Green laser prepped and loaded!",
        arduino: "pinMode(6, OUTPUT);",
        commentary: ""
      },
      {
        title: "💙 Step 3 – Blue Booster Standing By",
        narration: "Blue energy module activated!",
        arduino: "pinMode(9, OUTPUT);",
        commentary: ""
      },
      {
        title: "🔴 Step 4 – Fire the Red Beam!",
        narration: "Red light ON — like Ironman’s repulsor!",
        arduino: "digitalWrite(5, HIGH);\ndigitalWrite(6, LOW);\ndigitalWrite(9, LOW);",
        commentary: ""
      },
      {
        title: "⏳ Step 5 – Hold Steady",
        narration: "Let everyone see the red glow for 1 second.",
        arduino: "delay(1000);",
        commentary: ""
      },
      {
        title: "🟢 Step 6 – Switch to Green Glow!",
        narration: "Green mode activated — like the energy core stabilizing!",
        arduino: "digitalWrite(5, LOW);\ndigitalWrite(6, HIGH);\ndigitalWrite(9, LOW);",
        commentary: ""
      },
      {
        title: "⏳ Step 7 – Pause and Shine",
        narration: "Show off that green power for 1 second.",
        arduino: "delay(1000);",
        commentary: ""
      },
      {
        title: "🔵 Step 8 – Engage the Blue Pulse!",
        narration: "Blue reactor glow on full blast!",
        arduino: "digitalWrite(5, LOW);\ndigitalWrite(6, LOW);\ndigitalWrite(9, HIGH);",
        commentary: ""
      },
      {
        title: "⏳ Step 9 – Glow Time for Blue",
        narration: "Hold that blue beam for another second.",
        arduino: "delay(1000);",
        commentary: ""
      }
    ],
    code: `
void setup() {
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  digitalWrite(5, HIGH); digitalWrite(6, LOW); digitalWrite(9, LOW); // Red
  delay(1000);
  digitalWrite(5, LOW); digitalWrite(6, HIGH); digitalWrite(9, LOW); // Green
  delay(1000);
  digitalWrite(5, LOW); digitalWrite(6, LOW); digitalWrite(9, HIGH); // Blue
  delay(1000);
}`
  },
  {
    classNum: 10,
    title: "Full Arc Alert",
    moretitle: "Full Arc Alert (Pins D4, D5, D9, D7)",
    icon: "⚠️",
    description: "RGB flashes quickly like charging. Eyes blink slowly like a warning system.",
    badges: ["⚡ Red (D4)", "⚡ Green (D5)", "⚡ Blue (D9)", "⚡ Eyes (D7)"],
    video: "",
    story: "Ironman Says: \"Alert mode active – core stable!\"",
    steps: [
      {
        title: "🔌 Step 1 – Get My Red Blaster Ready!",
        narration: "Red light system online — ready to fire!",
        arduino: "pinMode(4, OUTPUT);",
        commentary: ""
      },
      {
        title: "💚 Step 2 – Power Up My Green Beam!",
        narration: "Green blaster is charged up and standing by!",
        arduino: "pinMode(5, OUTPUT);",
        commentary: ""
      },
      {
        title: "💙 Step 3 – Activate Blue Booster!",
        narration: "Blue core is online — glowing like my arc reactor!",
        arduino: "pinMode(9, OUTPUT);",
        commentary: ""
      },
      {
        title: "👀 Step 4 – Wake Up My Glowing Eyes!",
        narration: "My robot eyes are turned ON and watching the world!",
        arduino: "pinMode(7, OUTPUT);",
        commentary: ""
      },
      {
        title: "🔴 Step 5 – Flash Red Like an Alert!",
        narration: "Red light ON — emergency mode triggered!",
        arduino: "digitalWrite(4, HIGH);",
        commentary: ""
      },
      {
        title: "⏳ Step 6 – Wait for 0.2 Seconds",
        narration: "Let the red flash for a short moment.",
        arduino: "delay(200);",
        commentary: ""
      },
      {
        title: "🔕 Step 7 – Red Light OFF",
        narration: "Red beam off — alert mode complete.",
        arduino: "digitalWrite(4, LOW);",
        commentary: ""
      },
      {
        title: "🟢 Step 8 – Flash Green Now!",
        narration: "Green glow activated — safe and steady!",
        arduino: "digitalWrite(5, HIGH);",
        commentary: ""
      },
      {
        title: "⏳ Step 9 – Pause for 0.2 Seconds",
        arduino: "delay(200);",
        narration: "Let the green shine briefly.",
        commentary: ""
      },
      {
        title: "🔕 Step 10 – Turn Green OFF",
        arduino: "digitalWrite(5, LOW);",
        narration: "Green power down — switching to next color!",
        commentary: ""
      },
      {
        title: "🔵 Step 11 – Engage Blue Flash!",
        arduino: "digitalWrite(9, HIGH);",
        narration: "Blue light ON — arc reactor sparkle mode!",
        commentary: ""
      },
      {
        title: "⏳ Step 12 – Glow for 0.2 Seconds",
        arduino: "delay(200);",
        narration: "Keep the blue light glowing briefly!",
        commentary: ""
      },
      {
        title: "🔕 Step 13 – Turn Blue OFF",
        arduino: "digitalWrite(9, LOW);",
        narration: "Power down blue — cycle complete!",
        commentary: ""
      },
      {
        title: "🔁 Step 14 – Keep Flashing All Colors!",
        narration: "Keep cycling Red → Green → Blue — like a color dance show!",
        arduino: "// back to loop",
        commentary: ""
      }
    ],
    code: `
void setup() {
  pinMode(4, OUTPUT);  // Red
  pinMode(5, OUTPUT);  // Green
  pinMode(9, OUTPUT);  // Blue
  pinMode(7, OUTPUT);  // Eyes
}

void loop() {
  digitalWrite(4, HIGH); delay(200); digitalWrite(4, LOW);
  digitalWrite(5, HIGH); delay(200); digitalWrite(5, LOW);
  digitalWrite(9, HIGH); delay(200); digitalWrite(9, LOW);

  digitalWrite(7, HIGH); delay(1000);
  digitalWrite(7, LOW); delay(1000);
}`
  },
  {
    classNum: 11,
    title: "Arc Reactor Light Show",
    moretitle: "Arc Reactor Light Show (Pins D2, D8, D10, D11, D12, D13)",
    icon: "🎆",
    description: "All chest and body arc lights are ON, glowing together like full-power mode.",
    badges: ["⚡ Arc LEDs (D2, D8–D13)"],
    video: "",
    story: "Ironman Says: \"All systems online — let’s light up the sky!\"",
    steps: [
      {
        title: "🧰 Step 1 – Prepare My Arc Power Ports!",
        narration: "Ports are now ready to power up energizing my thruster!",
        arduino: `pinMode(2, OUTPUT);
pinMode(8, OUTPUT);
pinMode(10, OUTPUT);
pinMode(11, OUTPUT);
pinMode(12, OUTPUT);
pinMode(13, OUTPUT);`,
        commentary: ""
      },
      {
        title: "🚀 Step 2 – Full Power Mode: ALL LIGHTS ON!",
        narration: "WHOOSH! All Ironman lights are shining bright — like a superhero blast off!",
        arduino: `digitalWrite(2, HIGH);
digitalWrite(8, HIGH);
digitalWrite(10, HIGH);
digitalWrite(11, HIGH);
digitalWrite(12, HIGH);
digitalWrite(13, HIGH);`,
        commentary: ""
      }
    ],
    code: `
void setup() {
  pinMode(2, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(2, HIGH);
  digitalWrite(8, HIGH);
  digitalWrite(10, HIGH);
  digitalWrite(11, HIGH);
  digitalWrite(12, HIGH);
  digitalWrite(13, HIGH);
}`
  },
  {
    classNum: 13,
    title: "Ironman's Glowing Eyes",
    moretitle: "Ironman's Glowing Eyes (Pin D7)",
    icon: "👀",
    description: "If the button is pressed, Ironman's eyes light up.",
    badges: ["⚡ Button (A0)", "⚡ Eyes LED (D7)"],
    video: "",
    story: "Ironman says: “Press my secret chest button to activate my glowing eyes!”",
    steps: [
      {
        title: "🖐️ Step 1 – Wake Up and Get Ready!",
        narration: "The code says: “Hey Button! Are you being pushed?”",
        arduino: "pinMode(A0, INPUT);",
        commentary: "“A0 is the place where my hand button is connected. Get ready to check it!”"
      },
      {
        title: "👀 Step 2 – Get My Eyes Ready!",
        narration: "Let's tell my eye light to be ready!",
        arduino: "pinMode(7, OUTPUT);",
        commentary: "“D7 is for my eyes. Be ready to glow when I say so!”"
      },
      {
        title: "🟢 Step 3 – Is The Button Pushed?",
        narration: "I’ll check if the button is pressed!",
        arduino: "digitalRead(A0);",
        commentary: "“Hmm... Is someone pressing my hand button?”"
      },
      {
        title: "💡 Step 4 – Light Up My Eyes!",
        narration: "If YES (if button is HIGH):",
        arduino: "digitalWrite(7, HIGH);",
        commentary: "“Yay! Someone pressed it! Turn ON my glowing eyes!”"
      },
      {
        title: "⚫ Step 5 – Button Not Pressed?",
        narration: "If the button is NOT pressed...",
        arduino: "digitalWrite(7, LOW);",
        commentary: "“Okay, button is not pressed now. Turn OFF my eyes!”"
      }
    ],
    code: `
void setup() {
  pinMode(A0, INPUT);    // Button 0
  pinMode(7, OUTPUT);    // Eyes LED
}

void loop() {
  int buttonState = digitalRead(A0);
  if (buttonState == HIGH) {
    digitalWrite(7, HIGH);  // Eyes ON
  } else {
    digitalWrite(7, LOW);   // Eyes OFF
  }
}
`
  },
  {
    classNum: 14,
    title: "Motion Detector Laser",
    moretitle: "Motion Detector Laser",
    icon: "🔴",
    description: "The IR sensor detects movement. If someone waves their hand, Ironman’s laser diode (Pin 4) turns on.",
    badges: ["👁 IR Sensor (A6)", "🔴 Laser (D4)"],
    video: "",
    story: "Ironman Says: “When I detect motion with my hand sensor, I fire the laser!”",
    steps: [
      {
        title: "👋 Step 1 – Prepare My Hand Sensor",
        narration: "Get my IR sensor ready to detect movement!",
        arduino: "pinMode(A6, INPUT);",
        commentary: "“A6 is where my special IR eye is connected. Get ready to look for people!”"
      },
      {
        title: "💥 Step 2 – Get My Laser Ready",
        narration: "Laser on standby!",
        arduino: "pinMode(4, OUTPUT);",
        commentary: "“D6 is my laser light. Be ready to fire when I say GO!”"
      },
      {
        title: "📡 Step 3 – Read Sensor Vision!",
        narration: "I’m scanning the environment… measuring how close something is!",
        arduino: "int irState = analogRead(A6);",
        commentary: "“Uh-oh! I see someone sneaking up on me!”"
      },
      {
        title: "🕵️‍♂️ Step 4 – Did I Spot Something Super Close?",
        narration: "Check if something’s really close.",
        arduino: "if (irState < 999) {",
        commentary: "“Hmm... a strong signal! Something’s really close to me!”"
      },
      {
        title: "🔫 Step 5 – FIRE THE LASER!",
        narration: "Blast activated!",
        arduino: "digitalWrite(4, HIGH);",
        commentary: "“Pew! Laser beam activated to blast the target!”"
      },
      {
        title: "💤 Step 6 – Nothing Detected? Stand Down!",
        narration: "If no object is detected...",
        arduino: "digitalWrite(4, LOW);",
        commentary: "“No danger nearby. Laser off to save power.”"
      },
      {
        title: "🔁 Step 7 – Keep Scanning Forever!",
        narration: "Loop back to scanning again.",
        arduino: "(Loop continues back to Step 3)",
        commentary: "“I’m always watching… always ready to zap when needed!”"
      }
    ],
    code: `
void setup() {
  pinMode(A6, INPUT);   // IR Sensor
  pinMode(4, OUTPUT);   // Laser LED
}

void loop() {
  int irState = analogRead(A6);
  if (irState < 999) {
    digitalWrite(4, HIGH);  // Laser ON
  } else {
    digitalWrite(4, LOW);   // Laser OFF
  }
}
`
  },
  {
    classNum: 15,
    title: "Rainbow Chest Light",
    moretitle: "Rainbow Chest Light",
    icon: "🌈",
    description: "The RGB LED (Pin 9) lights up when Button 1 (Pin A1) is pressed.",
    badges: ["🟢 Button (A1)", "🌈 RGB LED (D9)"],
    video: "",
    story: "Ironman Says: 👦🏻 \"Let’s make Ironman’s chest light up when you press the special button!\"",
    steps: [
      {
        title: "✋ Step 1 – Get the Button Ready",
        narration: "Ready the button for chest activation!",
        arduino: "pinMode(A1, INPUT);",
        commentary: "“This is the button connected to A1. I'm ready to feel a press!”"
      },
      {
        title: "🌟 Step 2 – Prepare My Chest Light",
        narration: "My arc reactor is warming up!",
        arduino: "pinMode(9, OUTPUT);",
        commentary: "“This is my rainbow-colored arc reactor in my chest. Get ready to glow!”"
      },
      {
        title: "🔎 Step 3 – Is the Button Pressed?",
        narration: "Checking for input...",
        arduino: "digitalRead(A1);",
        commentary: "“Hmm… Did my buddy press the button?”"
      },
      {
        title: "🌈 Step 4 – YES! Light Up My Chest!",
        narration: "If YES (button is HIGH):",
        arduino: "digitalWrite(9, HIGH);",
        commentary: "“Woohoo! I’m powering up! Chest light ON!”"
      },
      {
        title: "📴 Step 5 – No Press? Chest OFF",
        narration: "If NO (button is LOW):",
        arduino: "digitalWrite(9, LOW);",
        commentary: "“Okay, no need to shine now. Power down.”"
      }
    ],
    code: `
void setup() {
  pinMode(A1, INPUT);   // Button 1
  pinMode(9, OUTPUT);   // RGB LED (Chest)
}

void loop() {
  int buttonState = digitalRead(A1);
  if (buttonState == HIGH) {
    digitalWrite(9, HIGH);  // RGB Chest ON
  } else {
    digitalWrite(9, LOW);   // RGB Chest OFF
  }
}
`
  },
  {
    classNum: 16,
    title: "Hand Laser Blaster",
    moretitle: "Hand Laser Blaster (Triggered by Button)",
    icon: "⚡",
    description: "When you press the button, it tells the laser to turn on. When you let go, the laser turns off.",
    badges: ["⚡ Button (A0)", "🔴 Laser (D4)"],
    video: "",
    story: "Ironman Says: “When you press my button, I’ll blast my red laser out of my hand! Pew-pew! 💥”",
    steps: [
      {
        title: "✋ Step 1 – Get My Button Ready",
        narration: "Powering up the fire button...",
        arduino: "pinMode(A0, INPUT);",
        commentary: "“My button is on! I’m ready for you to press it!”"
      },
      {
        title: "💥 Step 2 – Prepare My Laser Blaster",
        narration: "Laser ready for action!",
        arduino: "pinMode(4, OUTPUT);",
        commentary: "“My hand laser is charged and waiting!”"
      },
      {
        title: "🔍 Step 3 – Is the Button Pressed?",
        narration: "Check button status...",
        arduino: "digitalRead(A0)",
        commentary: "If it's pressed (HIGH)... then..."
      },
      {
        title: "🚨 Step 4 – FIRE THE LASER!",
        narration: "Boom! Laser firing initiated!",
        arduino: "digitalWrite(4, HIGH);",
        commentary: "“ZAP! Firing the red laser beam!”"
      },
      {
        title: "🔇 Step 5 – If Not Pressed, Stay Quiet",
        narration: "No press? Stay cool.",
        arduino: "digitalWrite(4, LOW);",
        commentary: "“No press? Okay, laser off. I’ll wait!”"
      }
    ],
    code: `
void setup() {
  pinMode(4, OUTPUT);  // Laser diode (D6)
  pinMode(A0, INPUT);  // Button (A0)
}

void loop() {
  if (digitalRead(A0) == HIGH) {
    digitalWrite(4, HIGH); // Fire laser
  } else {
    digitalWrite(4, LOW);  // Turn off laser
  }
}
`
  },
  {
    classNum: 17,
    title: "Flying Mode Detector",
    moretitle: "Flying Mode Detector with IR",
    icon: "🚀",
    description: "When someone walks nearby, the IR sensor triggers the lights on Ironman’s hands and legs.",
    badges: ["👁 IR Sensor (A6)", "🔥 Boosters (D3)"],
    video: "",
    story: "Ironman Says: “If I see someone move in front of me... I’ll light up my flying boosters and get ready for takeoff!” 🚀💥",
    steps: [
      {
        title: "✋🦵 Step 1 – Power Up My Hands & Legs Lights!",
        narration: "",
        arduino: "pinMode(3, OUTPUT);",
        commentary: "“My glowing thrusters on hands and legs are now standing by — ready for liftoff!”"
      },
      {
        title: "👁 Step 2 – Turn On My IR Sensor Eyes!",
        narration: "",
        arduino: "pinMode(A6, INPUT);",
        commentary: "“Sensor vision online! I’m watching for any movement in front of me!”"
      },
      {
        title: "🧙‍♂️ Step 3 – Is Someone Moving Near Me?",
        narration: "",
        arduino: "if (analogRead(A6) < 900) {",
        commentary: "“Scanning... Did I detect someone close? A hand? A high-five? Maybe a sneaky robot?”"
      },
      {
        title: "🚀 Step 4 – Movement Detected! Boosters ON!",
        narration: "",
        arduino: "digitalWrite(3, HIGH);",
        commentary: "“Woooosh! Thrusters on! Time to fly and light up the sky!”"
      },
      {
        title: "💤 Step 5 – No One There? Lights OFF.",
        narration: "",
        arduino: "digitalWrite(3, LOW);",
        commentary: "“All clear. No motion detected. Saving energy for the next launch.”"
      },
      {
        title: "🔁 Step 6 – Keep Watching Forever!",
        narration: "} else {",
        arduino: "(The loop continues back to Step 3.)",
        commentary: "“Staying alert like a true hero — scanning, glowing, flying!”"
      }
    ],
    code: `
void setup() {
  pinMode(3, OUTPUT);  // Hands and legs light (D3)
  pinMode(A6, INPUT);  // IR sensor (A6)
}

void loop() {
  if (analogRead(A6) < 999) {
    digitalWrite(3, HIGH); // Activate flying lights when movement detected
  } else {
    digitalWrite(3, LOW);
  }
}
`
  },
  {
    classNum: 19,
    title: "Footstep Detector with IR",
    moretitle: "Footstep Detector (IR Sensor + Legs LED)",
    icon: "🦶",
    description: "When someone walks nearby, the IR sensor triggers the lights on Ironman's hands, legs and semi arc.",
    badges: ["👁 IR Sensor (A6)", "🔥 Flying LED (D3)", "🌟 Semi Arc (D13/D11/D2)"],
    video: "",
    story: "Ironman Says: “If I see someone move in front of me... I’ll light up my flying boosters, semi arc and get active to takeoff!”",
    steps: [
      {
        title: "👁 Step 1 – Turn On My IR Sensor Eyes",
        narration: "My invisible sensor eyes are open. I’m watching for movement!",
        arduino: "pinMode(A6, INPUT);",
        commentary: ""
      },
      {
        title: "💡 Step 2 – Get My Booster Lights Ready",
        narration: "My flying lights on hands and legs are ready to glow!",
        arduino: "pinMode(3, OUTPUT);",
        commentary: ""
      },
      {
        title: "💡 Step 3 – Get My Arc Lights Ready",
        narration: "My semi arc lights are ready to glow!",
        arduino: "pinMode(13, OUTPUT); pinMode(11, OUTPUT); pinMode(2, OUTPUT);",
        commentary: ""
      },
      {
        title: "🧙‍♂️ Step 4 – Is Someone Moving?",
        narration: "Did my sensor spot something? A person? A hand? A flying cookie?",
        arduino: "if (analogRead(A6) < 999)",
        commentary: ""
      },
      {
        title: "🚀 Step 5 – Movement Detected! Lights ON!",
        narration: "Woooosh! Time to fly and to activate the half power!",
        arduino: "digitalWrite(3, HIGH); digitalWrite(13, HIGH); digitalWrite(11, HIGH); digitalWrite(2, HIGH);",
        commentary: ""
      },
      {
        title: "💤 Step 6 – No Movement? Lights OFF.",
        narration: "Nothing’s there… let’s save power.",
        arduino: "digitalWrite(3, LOW); digitalWrite(13, LOW); digitalWrite(11, LOW); digitalWrite(2, LOW);",
        commentary: ""
      }
    ],
    code: `
void setup() {
  pinMode(3, OUTPUT);  // Hands and legs light (D3)
  pinMode(13, OUTPUT); 
  pinMode(11, OUTPUT); 
  pinMode(2, OUTPUT); 
  pinMode(A6, INPUT);  // IR sensor (A6)
}

void loop() {
  if (analogRead(A6) < 999) {
    digitalWrite(3, HIGH);
    digitalWrite(13, HIGH);
    digitalWrite(11, HIGH);
    digitalWrite(2, HIGH);
  } else {
    digitalWrite(3, LOW);
    digitalWrite(13, LOW);
    digitalWrite(11, LOW);
    digitalWrite(2, LOW);
  }
}`
  },
  {
    classNum: 20,
    title: "IR Sensor Activation – Blast Mode",
    moretitle: "IR Sensor Activation – Blast Mode",
    icon: "💥",
    description: "When something comes too close, Ironman powers up! He fires his laser, lights up his eyes, and makes his arc reactor glow bright.",
    badges: ["👁 IR Sensor (A6)", "🔴 Laser (D4)", "👀 Eyes (D7)", "🌈 RGB Chest (D6)"],
    video: "",
    story: "Ironman says: “When I see an enemy coming close... I light up, power up, and shoot my laser to protect the world!”",
    steps: [
      {
        title: "👁 Step 1 – IR Sensor Sees Something",
        narration: "My secret sensor is watching for danger!",
        arduino: "pinMode(A6, INPUT);",
        commentary: ""
      },
      {
        title: "💡 Step 2 – Get My Laser, Eyes & Chest Ready",
        narration: "My parts are charged and ready to light up!",
        arduino: "pinMode(D4, OUTPUT); pinMode(D7, OUTPUT); pinMode(D6, OUTPUT);",
        commentary: ""
      },
      {
        title: "🧙‍♂️ Step 3 – Did My Sensor See Something?",
        narration: "Uh-oh! Something’s close! Time to power up!",
        arduino: "int val = digitalRead(A6);",
        commentary: ""
      },
      {
        title: "💥 Step 4 – Full Battle Mode ON!",
        narration: "Laser, eyes, and arc are all active!",
        arduino: "if (val == LOW) { digitalWrite(D4, HIGH); digitalWrite(D7, HIGH); digitalWrite(D6, HIGH); }",
        commentary: ""
      },
      {
        title: "💤 Step 5 – No Enemy? Back to Normal",
        narration: "All lights go LOW → “All clear. Standing by.”",
        arduino: "else { digitalWrite(D4, LOW); digitalWrite(D7, LOW); digitalWrite(D6, LOW); }",
        commentary: ""
      }
    ],
    code: `
void setup() {
  pinMode(A6, INPUT);         // IR Sensor
  pinMode(4, OUTPUT);         // Laser Diode
  pinMode(7, OUTPUT);         // Eye LED
  pinMode(6, OUTPUT);         // RGB LED
}

void loop() {
  int irValue = analogRead(A6);

  if (irValue < 500) { // IR sensor detects obstacle
    digitalWrite(4, HIGH);       // Fire laser
    digitalWrite(7, HIGH);       // Turn ON eye LED
    digitalWrite(6, HIGH);       // Turn ON RGB LED
  } else {
    digitalWrite(4, LOW);        // Laser OFF
    digitalWrite(7, LOW);        // Eye LED OFF
    digitalWrite(6, LOW);        // RGB LED OFF
  }

  delay(100); // Optional: small delay to prevent flickering
}`
  },
  {
    classNum: 21,
    title: "Dual Button = Dual Mode Control",
    moretitle: "Dual Button = Dual Mode Control",
    icon: "🎮",
    description: "Button A0 turns on the eyes and jet LEDs, while Button A1 controls the laser.",
    badges: ["🔘 Button A0", "🔘 Button A1", "🔥 Laser (D4)", "🛫 Flying LED (D3)", "👀 Eyes (D7)"],
    video: "",
    story: "Ironman Says: “Two buttons – one for flight mode, one for attack mode!”",
    steps: [
      {
        title: "🦸‍♂️ Step 1 – All Systems Check!",
        narration: "Button 0 is ready to launch me into the sky!",
        arduino: "pinMode(A0, INPUT);",
        commentary: ""
      },
      {
        title: "💡 Step 2 – Button 1 is My Secret Weapon!",
        narration: "Button 1 is my laser trigger. Time to defend!",
        arduino: "pinMode(A1, INPUT);",
        commentary: ""
      },
      {
        title: "⚡ Step 3 – Get My Laser, Flying Mode & Eyes Ready",
        narration: "Arming all gadgets!",
        arduino: "pinMode(4, OUTPUT); pinMode(3, OUTPUT); pinMode(7, OUTPUT);",
        commentary: ""
      },
      {
        title: "👁 Step 4 – Flying Mode Activated?",
        narration: "“Button 0 pressed! I’m flying and my eyes are on!”",
        arduino: "if (digitalRead(A0) == HIGH) { digitalWrite(3, HIGH); digitalWrite(7, HIGH); }",
        commentary: ""
      },
      {
        title: "💥 Step 5 – Laser Power!",
        narration: "“Button 1 pressed! My laser is ready to fire!”",
        arduino: "if (digitalRead(A1) == HIGH) { digitalWrite(4, HIGH); }",
        commentary: ""
      },
      {
        title: "💤 Step 6 – Back to Normal Mode",
        narration: "“All systems stand by. I’m ready for the next mission!”",
        arduino: "digitalWrite(3, LOW); digitalWrite(4, LOW); digitalWrite(7, LOW);",
        commentary: ""
      },
      {
        title: "💤 Step 7 – Turn Off",
        narration: "“No one’s there. Let’s save energy!”",
        arduino: "digitalWrite(4, LOW);",
        commentary: ""
      }
    ],
    code: `
void setup() {
  pinMode(A0, INPUT);
  pinMode(A1, INPUT);
  pinMode(4, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(7, OUTPUT);
}

void loop() {
  if (digitalRead(A0) == HIGH) {
    digitalWrite(3, HIGH);
    digitalWrite(7, HIGH);
  } else {
    digitalWrite(3, LOW);
    digitalWrite(7, LOW);
  }

  if (digitalRead(A1) == HIGH) {
    digitalWrite(4, HIGH);
  } else {
    digitalWrite(4, LOW);
  }
}`
  },
  {
    classNum: 22,
    title: "Distance Comparator IR Laser",
    moretitle: "Distance Comparator IR Laser",
    icon: "🔍",
    description: "Ironman is standing tall.👁 IR sensor on his chest is scanning...Laser in his palm and 🌟 glowing eyes turn ON when something gets close!",
    badges: ["👁 IR Sensor (A6)", "🔴 Laser (D4)", "👀 Eyes (D7)"],
    video: "",
    story: "Ironman Says: “I use my special eye sensor to spot intruders! My eyes glow and laser powers up when something gets close!”",
    steps: [
      {
        title: "🦸‍♂️ Step 1 – Suit Initialization",
        narration: "All pins are now live and ready.",
        arduino: "pinMode(D4, OUTPUT); pinMode(D7, OUTPUT); pinMode(A6, INPUT);",
        commentary: ""
      },
      {
        title: "👁 Step 2 – Scan for Villains!",
        narration: "“Let me check the number from my IR sensor. Small number? Something is really close!”",
        arduino: "int value = analogRead(A6);",
        commentary: ""
      },
      {
        title: "🚨 Step 3 – Danger Detected!",
        narration: "Eyes + Laser = ON!",
        arduino: "if (value < 300) { digitalWrite(D4, HIGH); digitalWrite(D7, HIGH); }",
        commentary: ""
      },
      {
        title: "😌 Step 4 – All Clear",
        narration: "Powering down.",
        arduino: "else { digitalWrite(D4, LOW); digitalWrite(D7, LOW); }",
        commentary: ""
      },
      {
        title: "🔁 Step 5 – Keep Watching… Always!",
        narration: "Powering down.",
        arduino: "void loop() {  // Repeats forever!}",
        commentary: "“I never stop watching. Ironman is always on guard!”"
      }
    ],
    code: `
void setup() {
  pinMode(4, OUTPUT);            // Laser
  pinMode(7, OUTPUT);            // Eye LED
  pinMode(A6, INPUT);            // IR Sensor
}

void loop() {
  int value = analogRead(A6);    // Read IR sensor value

  if (value < 300) {             // Object is close
    digitalWrite(4, HIGH);       // Laser ON
    digitalWrite(7, HIGH);       // Eye LED ON
  } else {
    digitalWrite(4, LOW);        // Laser OFF
    digitalWrite(7, LOW);        // Eye LED OFF
  }

  delay(100);  // Optional: short delay for stability
}`
  },
  {
    classNum: 23,
    title: "Danger Alert – Combo Triggered",
    moretitle: "Danger Alert – Combo Triggered",
    icon: "🚨",
    description: "•	A button on Ironman’s hand is pressed (A0),His invisible chest sensor (A6) sees no one there, BOOM! 🌈 RGB chest glows, 💥 laser shoots, 👁️ eyes light up! If not, everything stays OFF — Ironman is saving energy!",
    badges: ["🔘 Button A0", "👁 IR Sensor A6", "🌈 RGB Chest (D6)", "🔴 Laser (D4)", "👀 Eyes (D7)"],
    video: "",
    story: "Ironman Says: “Only when the button is pressed and no one is in front of me... I power up my glowing eyes, rainbow chest, and laser!”",
    steps: [
      {
        title: "🦸‍♂️ Step 1 – Suit Check: Inputs and Outputs Ready!",
        narration: "Button and sensor ready. LEDs standing by.",
        arduino: "pinMode(A0, INPUT); pinMode(A6, INPUT); pinMode(D6, OUTPUT); pinMode(D4, OUTPUT); pinMode(D7, OUTPUT);",
        commentary: ""
      },
      {
        title: "🕹 Step 2 – Read the Button and Sensor",
        narration: "Time to evaluate inputs.",
        arduino: "int button = digitalRead(A0); int sensor = digitalRead(A6);",
        commentary: ""
      },
      {
        title: "💥 Step 3 – Button Pressed AND No One in Front? FIRE!",
        narration: "All LEDs activate!",
        arduino: "if (button == HIGH && sensor == LOW) { digitalWrite(D6, HIGH); digitalWrite(D4, HIGH); digitalWrite(D7, HIGH); }",
        commentary: ""
      },
      {
        title: "😴 Step 4 – Power Down",
        narration: "Conditions not met? Save energy.",
        arduino: "else { digitalWrite(D6, LOW); digitalWrite(D4, LOW); digitalWrite(D7, LOW); }",
        commentary: ""
      },
      {
        title: ". 🔁 Step 5 – Stay on Guard… Always!",
        narration: "",
        arduino: "void loop() {// I keep checking forever!}",
        commentary: "“Ironman never stops watching. My suit is always ready for action! "
      }
    ],
    code: `
void setup() {
  pinMode(A0, INPUT);        // Button input
  pinMode(A6, INPUT);        // IR sensor input
  pinMode(6, OUTPUT);        // RGB LED
  pinMode(4, OUTPUT);        // Laser
  pinMode(7, OUTPUT);        // Eyes LED
}

void loop() {
  int button = analogRead(A0);
  int sensor = analogRead(A6);

  if (button > 500 && sensor < 500) {
    digitalWrite(6, HIGH);      // RGB LED ON
    digitalWrite(4, HIGH);      // Laser ON
    digitalWrite(7, HIGH);      // Eyes ON
  } else {
    digitalWrite(6, LOW);       // RGB LED OFF
    digitalWrite(4, LOW);       // Laser OFF
    digitalWrite(7, LOW);       // Eyes OFF
  }

  delay(100); // Optional debounce or stability delay
}`
  },
  {
    classNum: 25,
    title: "Motion Sensor Rainbow Light",
    moretitle: "Motion Sensor Rainbow Light",
    icon: "🌈",
    description: "Ironman's Arc Reactor (D8) flashes 5 times like it's charging up!",
    badges: ["⚡ IR Sensor (A6)", "⚡ RGB LED (D6)"],
    video: "",
    story: "Ironman Says: 🗯️ “Let’s do a cool power pulse! Watch my chest light blink like a reactor!”",
    steps: [
      {
        title: "🖐️ Step 1 – Get My Chest Light Ready!",
        narration: "The code says: “Hey Arc Reactor LED! Are you connected to D8?”",
        arduino: "pinMode(8, OUTPUT);",
        commentary: "Yes! You’re my glowing chest light – get ready to flash!"
      },
      {
        title: "🔁 Step 2 – Start the Reactor Loop!",
        narration: "for (int i = 0; i < 5; i++) means:",
        arduino: "",
        commentary: "I will repeat this flashing trick 5 times! Count with me!"
      },
      {
        title: "💡 Step 3 – Power Up My Chest Light!",
        narration: "digitalWrite(8, HIGH); means: Turn ON my reactor glow! Let’s shine!",
        arduino: "delay(300);",
        commentary: "Wait for 300 milliseconds so everyone can see it!"
      },
      {
        title: "⚫ Step 4 – Power Down Again!",
        narration: "digitalWrite(8, LOW); means: Now turn OFF the light!",
        arduino: "delay(300);",
        commentary: "Take a little break before the next flash!"
      },
      {
        title: "⏳ Step 5 – Recharge Time!",
        narration: "delay(1000); means:",
        arduino: "After all 5 flashes, the code says:",
        commentary: "Whew! Reactor needs a quick rest – wait 1 second before repeating the whole thing!"
      }
    ],
    code: `
void setup() {
  pinMode(8, OUTPUT); // Ironman's Arc Reactor LED 1
}

void loop() {
  for (int i = 0; i < 5; i++) {
    digitalWrite(8, HIGH);  // Turn ON chest light
    delay(300);             // Wait for 0.3 seconds
    digitalWrite(8, LOW);   // Turn OFF chest light
    delay(300);             // Wait for 0.3 seconds
  }
  delay(1000); // Rest for 1 second before starting again
}
`
  },
  {
    classNum: 26,
    title: "Dual Button Control",
    moretitle: "Dual Button Control",
    icon: "🔘",
    description: "Ironman’s flying effect LEDs (D3) blink rapidly like rocket boosters powering up!",
    badges: ["⚡ Button (A0)", "⚡ Button (A1)", "⚡ LEDs (D7, D3)"],
    video: "",
    story: "Ironman Says: 🗯️ “Activating flight mode! Watch my hands and legs glow as I fly!”",
    steps: [
      {
        title: "🖐️ Step 1 – Ready My Rockets!",
        narration: "pinMode(3, OUTPUT); means:",
        arduino: "",
        commentary: "D3 is for my flying rocket lights – get them ready!"
      },
      {
        title: "🔁 Step 2 – Blast Off Loop Begins!",
        narration: "for (int i = 0; i < 10; i++) means:",
        arduino: "",
        commentary: "Let’s do this blinking rocket boost 10 times!"
      },
      {
        title: "🔥 Step 3 – Fire The Boosters!",
        narration: "digitalWrite(3, HIGH); means: Light up my rocket LEDs! Zoom!",
        arduino: "delay(100);",
        commentary: "Flash for a short burst (100 milliseconds)!"
      },
      {
        title: "⚫ Step 4 – Cool Down The Boosters!",
        narration: "digitalWrite(3, LOW); means: Turn the lights off quickly.",
        arduino: "delay(100);",
        commentary: "Take a super short break!"
      },
      {
        title: "⏳ Step 5 – Prepare For Next Takeoff!",
        narration: "delay(1000); means:",
        arduino: "",
        commentary: "Take a 1-second pause before another flight!"
      }
    ],
    code: `
void setup() {
  pinMode(3, OUTPUT); // Hands and Legs Flying LEDs
}

void loop() {
  for (int i = 0; i < 10; i++) {
    digitalWrite(3, HIGH);  // Fire on the rocket LEDs!
    delay(100);             // Short blink for fast motion
    digitalWrite(3, LOW);   // Stop LED
    delay(100);             // Pause before next blink
  }
  delay(1000); // Wait before next flight cycle
}
`
  },
  {
    classNum: 27,
    title: "Light Show with Delay Variation",
    moretitle: "Light Show with Delay Variation",
    icon: "⏳",
    description: "Ironman’s laser diode on hand (D4) flashes in a zap-zap pattern like a real laser gun.",
    badges: ["⚡ Laser Diode (D4)"],
    video: "",
    story: "Ironman Says: 🗯️ “Time to blast the bad guys with my laser beam!”",
    steps: [
      {
        title: "🖐️ Step 1 – Charge My Laser!",
        narration: "pinMode(4, OUTPUT); means:",
        arduino: "",
        commentary: "Pin D6 controls my powerful hand laser. Let’s make it ready!"
      },
      {
        title: "🔁 Step 2 – Prepare for 3 Laser Shots!",
        narration: "for (int i = 0; i < 3; i++) means:",
        arduino: "",
        commentary: "I’ll blast 3 times with my laser beam!"
      },
      {
        title: "🔴 Step 3 – Fire The Laser!",
        narration: "digitalWrite(4, HIGH); means: ZAP! Laser beam ON!",
        arduino: "delay(200);",
        commentary: "Keep the laser glowing for 200 milliseconds."
      },
      {
        title: "⚫ Step 4 – Pause Laser Between Blasts!",
        narration: "digitalWrite(4, LOW); means: Laser OFF – take a quick break.",
        arduino: "delay(100);",
        commentary: "Pause before the next shot."
      },
      {
        title: "⏳ Step 5 – Recharge the Laser Blaster!",
        narration: "delay(1500); means:",
        arduino: "",
        commentary: "Laser is cooling down for 1.5 seconds before shooting again."
      }
    ],
    code: `
void setup() {
  pinMode(4, OUTPUT); // Laser Diode on Ironman's Hand
}

void loop() {
  for (int i = 0; i < 3; i++) {
    digitalWrite(4, HIGH);  // Fire laser beam
    delay(200);             // Keep it on for 200ms
    digitalWrite(4, LOW);   // Laser off
    delay(100);             // Short pause before next blast
  }
  delay(1500); // Cooldown before next round of blasts
}
`
  },
  {
    classNum: 28,
    title: "Ironman's Glowing Eyes - Blink Like a Bot",
    moretitle: "Ironman's Glowing Eyes - Blink Like a Bot",
    icon: "🤖",
    description: "Ironman’s eye LEDs (D7) blink slowly like he’s scanning the battlefield.",
    badges: ["⚡ Eyes LED (D7)"],
    video: "",
    story: "Ironman Says: 'Let’s make my eyes blink like a secret scanning bot!'",
    steps: [
      {
        title: "👁️ Step 1 – Get My Eyes Ready!",
        narration: "pinMode(7, OUTPUT); means:",
        arduino: "",
        commentary: "Let’s tell D7 that my eyes are ready to glow!"
      },
      {
        title: "🔁 Step 2 – Blink Six Times Like a Bot!",
        narration: "for (int i = 0; i < 6; i++) means:",
        arduino: "",
        commentary: "Let’s blink my glowing eyes 6 times!"
      },
      {
        title: "💡 Step 3 – Eyes ON!",
        narration: "digitalWrite(7, HIGH); delay(500); means:",
        arduino: "Turn ON the eyes so I can scan my surroundings.",
        commentary: "Turn ON the eyes. Stay ON for half a second."
      },
      {
        title: "⚫ Step 4 – Eyes OFF!",
        narration: "digitalWrite(7, LOW); delay(500); means:",
        arduino: "Turn OFF the eye lights to rest.",
        commentary: "Take a quick half-second break before next scan."
      },
      {
        title: "⏳ Step 5 – Long Rest Between Scans!",
        narration: "delay(2000); means:",
        arduino: "",
        commentary: "Take a 2-second pause before scanning again!"
      }
    ],
    code: `
void setup() {
  pinMode(7, OUTPUT); // Eye LEDs
}

void loop() {
  for (int i = 0; i < 6; i++) {
    digitalWrite(7, HIGH);  // Turn ON eye light
    delay(500);             // Eyes stay ON for half a second
    digitalWrite(7, LOW);   // Turn OFF eyes
    delay(500);             // Eyes stay OFF for half a second
  }
  delay(2000); // Pause 2 seconds before next eye scan
}
`
  },
  {
    classNum: 29,
    title: "Ironman's Rainbow Reactor - RGB Color Pulse",
    moretitle: "Ironman's Rainbow Reactor - RGB Color Pulse (Pin D9)",
    icon: "🌈",
    description: "The RGB LED in the arc reactor (Pin D9) glows in a pulsing pattern — like energy flowing inside his chest.",
    badges: ["⚡ RGB LED (D9)"],
    video: "",
    story: "Ironman Says: 'Watch the power of my arc reactor change colors like a rainbow pulse!'",
    steps: [
      {
        title: "🌈 Step 1 – Power Up the Reactor!",
        narration: "pinMode(9, OUTPUT); means:",
        arduino: "",
        commentary: "Pin D9 controls the RGB LED. Ready to glow!"
      },
      {
        title: "🔁 Step 2 – Let’s Glow 5 Times!",
        narration: "for (int i = 0; i < 5; i++) means:",
        arduino: "",
        commentary: "Make the arc pulse 5 rainbow lights in a row."
      },
      {
        title: "💡 Step 3 – Glow the Arc Reactor!",
        narration: "digitalWrite(9, HIGH); delay(300); means:",
        arduino: "My chest reactor lights up like energy flowing!",
        commentary: "My chest reactor lights up! Stay ON for 300 ms."
      },
      {
        title: "⚫ Step 4 – Dim the Reactor Glow",
        narration: "digitalWrite(9, LOW); delay(300); means:",
        arduino: "Now turn OFF the arc to create a pulse effect.",
        commentary: "Stay OFF for 300 milliseconds."
      },
      {
        title: "⏳ Step 5 – Reactor Cooldown",
        narration: "delay(1000); means:",
        arduino: "",
        commentary: "Take a 1-second break before glowing again!"
      }
    ],
    code: `
void setup() {
  pinMode(9, OUTPUT); // RGB LED control pin
}

void loop() {
  for (int i = 0; i < 5; i++) {
    digitalWrite(9, HIGH); // Reactor glows
    delay(300);            // Stay ON for 0.3 seconds
    digitalWrite(9, LOW);  // Reactor dims
    delay(300);            // OFF for 0.3 seconds
  }
  delay(1000); // Pause 1 second before next color pulse
}
`
  }
];

export default lessons;