//jshint esversion: 6
(()=>{

    const blessed = require(`blessed`);
    const path = require(`path`);
    const log4js = require(`log4js`);
    log4js.configure(require('./config/log4js.json'));
    const sysLog = log4js.getLogger();
    let screen1 = blessed.screen({
        smartCSR : true
    });

    screen1.title = `Robot Service`;
    let sRobotTitle = [
        `#####################################################################################################################`,
        ``,
        `# ██████   ██████  ██████   ██████  ████████      ██████  ██████   ██████  ██    ██ ██████      ██    ██     ██████`,
        `# ██   ██ ██    ██ ██   ██ ██    ██    ██        ██       ██   ██ ██    ██ ██    ██ ██   ██     ██    ██          ██`,
        `# ██████  ██    ██ ██████  ██    ██    ██        ██   ███ ██████  ██    ██ ██    ██ ██████      ██    ██      █████`,
        `# ██   ██ ██    ██ ██   ██ ██    ██    ██        ██    ██ ██   ██ ██    ██ ██    ██ ██           ██  ██           ██`,
        `# ██   ██  ██████  ██████   ██████     ██         ██████  ██   ██  ██████   ██████  ██            ████       ██████`,
        `####################################################################################################################`
    ].join(`\n`);

    let box1 = blessed.box({
        top : ``,
        left : `center`,
        width : `100%`,
        height :`20%`,
        content : sRobotTitle,
        tags : true,
        border : {
            type :`line`
        },
        style : {
            fg : `blue`,
            bg : `black`
        }
    });

    screen1.append(box1);
    box1.on(`click`, (data)=>{
        box1.setContent('{center}Some different {red-fg}content{/red-fg}.{/center}');
        screen1.render();
    });

    box1.key(`enter`, (ch, key)=>{
        box1.setContent('{right}Even different {black-fg}content{/black-fg}.{/right}\n');
        box1.setLine(1, 'bar');
        box1.insertLine(1, 'foo');
        screen1.render();
    });

    screen1.key([`escape`, `q`, `C-c`], (ch, key)=> process.exit(0));

    box1.focus();

    screen1.render();



})();