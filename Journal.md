Journal Prompt 1:
Describe how you implemented the timer and how you generated random colors.
I used setInterval() to change the background colors of the panels at a set interval of time. I used Math.floor(Math.random() * 255) for the RGB values.
Why is it important to use a consistent interval for the lighting?
A consistent interval ensures a steady change as opposed to random, chaotic behavior.

Journal Prompt 2:
Explain the concept of “event bubbling.” 
If you don't use stopPropagation(), the event happening on the child will "bubble up" to the parent element(s). 
How did stopPropagation() allow you to separate the Dancer’s interaction from the Floor’s interaction? I didn't want to trigger the dance floor to change, so stopPropagation() stopped it from doing so.
