def on_button_pressed_a():
    basic.show_string("" + str((randint(1, 6))))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_sound_loud():
    basic.show_string("" + str((randint(1, 20))))
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_pressed_b():
    basic.show_string("" + str((randint(1, 8))))
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_string("D N D")