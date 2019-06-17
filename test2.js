

//jshint esversion: 6
(()=>{
    const blessed = require(`blessed`);
    const contrib = require(`blessed-contrib`);
    const screen = blessed.screen();
    const log4js = require(`log4js`);
    log4js.configure(require('./config/log4js.json'));
    const sysLog = log4js.getLogger();
    let screen1 = blessed.screen({
        smartCSR : true
    });

    let i = 0;
    let table = contrib.table({
        keys : true,
        fg : `white`,
        selectedFg: `white`,
        selectedBg: `blue`,
        interactive : true,
        label : `Active Processes`,
        width : `50%`,
        height : `50%`,
        border : {
            type : `line`,
            fg : `cyan`
        },
        columnSpacing : 10,
        columnWidth : [16, 12, 12]
    });

    let log = contrib.log({
        fg : `green`,
        label : `Log Example`,
        height : `20%`,
        tags: true,
        border : {type: "line", fg: "cyan"}
    });

    table.focus();

    table.setData({
        headers : [`ex1`, `ex2`, `ex3`],
        data : [
            [1, 2, 3],
            [4, 5, 6]
        ]
    });
    screen1.append(table);
    screen1.append(log);

    setInterval(()=> {
        i++;
        log.log(`new {red-fg}log{/red-fg} line ${i}`);
    }, 500);

    screen1.key(['escape', 'q', 'C-c'], (ch, key)=> {
        console.log(`ch : ${ch}`);
        console.log(`key : ${key}`);
        return process.exit(0);
      });

      screen1.render();
})();
