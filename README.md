Gets the dialogue out an ASS or SRT subtitle file. You can write the output
to a text file then open it in the browser so it works with Yomichan or
whatever.

To add the ability to convert for a certain anime's subtitle files, write the
appropriate conversion function and add it to the `conversionFunctions` object.

If there aren't enough command line arguments, the list of available
conversion functions is printed instead.


### Usage

```
node index.js <ANIME NAME> <SUBTITLE FILE>
```


### Example

```
node index.js umaru '[Kamigami] Himouto! Umaru-chan - 01 [1280x720 x264 AAC Sub(Chs,Cht,Jap)](1)(1).ass'
```
