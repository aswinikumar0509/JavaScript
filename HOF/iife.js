// Immediately Invoked Function Expression (IIFE)

(function chai() {
    console.log(`DB Connected`);
})();

// chai()
((name)=>{
    console.log(`DB Connected 2 ${name}`);
})('MongoDB')