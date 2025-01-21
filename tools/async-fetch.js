{

    function randomTimer(min=1000, max=9000) {
        return Math.random() * (max - min) + min;
    }
    
    function fetchData(keyword) {
        var timer = randomTimer();
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = `Data received!: ${keyword}`;
                resolve(data);
            }, timer)
        });
        
    }

    // fetchData('hello').then((rs) => console.log(rs));
    let latestPromise;
    function deboundAPI() {
        let id;
        return function(...args) {
            id = fetchData(args);
            return id;
        }
        
    }
    var xx = deboundAPI()

    setTimeout(() => {
       const rs = xx('0');
       latestPromise = rs;
       rs.then(x=> {
           if(latestPromise === rs) {
               console.log(x);
           }
       })
    }, 1)
    
    setTimeout(() => {
       const rs = xx('1');
       latestPromise = rs;
       rs.then(x=> {
           if(latestPromise === rs) {
               console.log(x);
           }
       })
    }, 2)
    setTimeout(() => {
       const rs = xx('2');
       latestPromise = rs;
       rs.then(x=> {
           if(latestPromise === rs) {
               console.log(x);
           }
       })
    }, 3)

    setTimeout(() => {
       const rs = xx('4');
       latestPromise = rs;
       rs.then(x=> {
           if(latestPromise === rs) {
               console.log(x);
           }
       })
    }, 4)
    
}
