---
title: Rhai Code
---

Rhai code works with DraftSmith

See the following examples for how to use it

## Markdown Examples

```markdown
Welcome to your new note-taking system!

DraftSmith helps you organize your thoughts, tasks, and knowledge. This note will show you the basic features available.

Key Features:
- Hierarchical notes
- Tags and categories
- Task management
- Links, e.g. [[2]]
- Full-text search
- Asset attachments






## Math

$$
\int
$$

## Tabs

:::tabs

:::tab
foo
:::

:::tab
bar
:::

:::tab
baz
:::

:::

## Callouts

:::success
Success!
:::

:::warning
Warning!
:::

:::error
Error!
:::

:::info
Info!
:::

## Rhai

### Blocks
```{rhai}
// This should be hidden and used for later context
let s = "";
```

### Display
```{rhai-display}
for i in 1..10 {
    s+=i;
}
s
```

### Inline

The numbers 1 to 10: λ#(s)#


## Images

    ![/m/icon.png](/m/icon.png)

![/m/icon.png](/m/icon.png)


## Rhai Functions
### Fun

#### Diamonds

λ#(generate_ascii_diamond(10))#

```{rhai-display}
let a = `some
string`
let b = `part
2`
```


`concat(a, b)): λ#(concat(a, b))#`

`double(10): λ#(double(10))#`

# Sandbox


λ#(rating_stars(4))#


λ#(radial_progress(50))#


```{rhai-display}
let s = "";
for i in 1..100 {
    if i % 10 == 0 {
        s += radial_progress(i);
    }
}
```
λ#(s)#



# Sandbox

## Feats

### Images

λ#(image("1.png", 30, "File: 1.png"))#

### Thumbnails

λ#(thumbnail("swslhd.png", "Title", "Description"))#

### Figures (WIP)

```{rhai-display}
let width = 30;
let file = "1.png";
let im = image(file, width, "File: " + file);
let caption = "Some Caption";
let float = false;
let fig = figure(im, caption, float);
```
λ#(fig)#

### Stars
λ#(rating_stars(4))#

### Progress
λ#(radial_progress(50))#



```{rhai}
let events = [
    [
        "1984",
        "First Macintosh computer",
        "The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.",
    ],
    [
        "1998",
        "iMac",
        "iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms.",
    ],
];

let apple_timeline = timeline(events)
```

λ#(apple_timeline)#

```{rhai-display}
let g = gallery(
    "All PNG Files",
    list_assets(`*.png`));
g
```
λ#(g)#

### By Hand

```{rhai-display}
let g = gallery("Gallery Example", [
"tmpzifq6fco.png",
"1.png",
"mentem",
"swslhd.png",
"pencil-square-svgrepo-com.svg",
"Screenshot_20241109-221939.png",
"signal-2024-10-15-153648_002.png",
"Screenshot_20241109-221933.png",
"PXL_20241109_035056242.jpg",
"zzz.jpeg",
"a.jpeg",
"t_wallpaper_2.png",
"PXL_20241109_011339068.jpg",
"dor_bon_young.png",
"PXL_20241109_114325283.jpg",
"icon.png",
"Screenshot_20241109-160513.png",
"PXL_20241109_111943383.jpg",
"PXL_20241106_103955540.MP.jpg",
"PXL_20241105_103851685.MP.jpg",
"PXL_20241107_233136261.jpg",
"shy",
"PXL_20241109_122051736.jpg",
"PXL_20241109_122514120.jpg",
"PXL_20241109_125223328.jpg",
"PXL_20241109_125222264.jpg",
"PXL_20241109_125221037.MP.jpg",
"PXL_20241109_125220385.MP.jpg",
"PXL_20241109_130145449.jpg",
"PXL_20241109_130150944.jpg",
"PXL_20241110_055517877.jpg",
]);
g
```
λ#(g)#


This:

    \λ\#(video("some_video.mp4"))#

becomes this:

```html

<details open><summary>📼</summary>
<div class="max-w-xl mx-auto bg-white p-4 border border-gray-300 rounded-lg shadow-md resize overflow-auto">
<video class="class="w-full h-auto" controls>
  <source src="/m/some_video.mp4" type="video/mp4">
</video>
</div>
</details>
```


    ## Keyboard

\λ\#(kbd("C-M-x"))#
```{rhai-display}
kbd("C-M-Home")
```
λ#(kbd("C-M-Del"))#

λ#(kbd("s-S-F1"))#


## Phone

```{rhai-display}
let o = phone(`


![Screenshot_20241111-122941.png](/m/Screenshot_20241111-122941.png)

`);
o
```
λ#(o)#
```
