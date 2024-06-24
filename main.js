#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        let fuel = this.health - 25;
        this.health = fuel;
    }
    ;
    increaseHealth() {
        this.health = 100;
    }
}
class Opponent {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        let fuel = this.health - 25;
        this.health = fuel;
    }
    ;
}
console.log(chalk.bold.blue("\n\t******Welcome to my Adventure Game******\t\n"));
const player = await inquirer.prompt([
    {
        name: "hero",
        type: "input",
        message: (chalk.yellow("Enter your player name:"))
    }
]);
const opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: (chalk.yellow("Select your enemy to fight with:")),
        choices: ["Skeleton", "Witch", "Zombie"]
    }
]);
let p1 = new Player(player.hero);
let o1 = new Opponent(opponent.select);
console.log(chalk.green(`\n ${player.hero} v/s ${opponent.select}\n`));
do {
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Choose your action?",
                choices: ["Attack", "Drink Portion", "Run"]
            }
        ]);
        if (ask.opt === "Attack") {
            let randomNum = Math.floor(Math.random() * 2);
            if (randomNum > 0) {
                p1.decreaseHealth();
                console.log(`\n\t${p1.name} health: ${p1.health}`);
                console.log(`\t${o1.name} health: ${o1.health}\n`);
                if (p1.health <= 0) {
                    console.log(chalk.red("You lose! Better luck next time."));
                    process.exit();
                }
            }
            if (randomNum <= 0) {
                o1.decreaseHealth();
                console.log(`\n\t${p1.name} health: ${p1.health}`);
                console.log(`\t${o1.name} health: ${o1.health}\n`);
                if (o1.health <= 0) {
                    console.log(chalk.green("Congratulations! You won."));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.increaseHealth();
            console.log(chalk.green(`\n\tDrinking Portion...Your health: ${p1.health}\n`));
        }
        if (ask.opt === "Run") {
            console.log(chalk.red("You lose! Better luck next time."));
            process.exit();
        }
    }
    ///Witch
    if (opponent.select === "Witch") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: (chalk.yellow("Choose your action?")),
                choices: ["Attack", "Drink Portion", "Run"]
            }
        ]);
        if (ask.opt === "Attack") {
            let randomNum = Math.floor(Math.random() * 2);
            if (randomNum > 0) {
                p1.decreaseHealth();
                console.log(`\n\t${p1.name} health: ${p1.health}`);
                console.log(`\t${o1.name} health: ${o1.health}\n`);
                if (p1.health <= 0) {
                    console.log(chalk.red("You lose! Better luck next time."));
                    process.exit();
                }
            }
            if (randomNum <= 0) {
                o1.decreaseHealth();
                console.log(`\n\t${p1.name} health: ${p1.health}`);
                console.log(`\t${o1.name} health: ${o1.health}\n`);
                if (o1.health <= 0) {
                    console.log(chalk.green("Congratulations! You won."));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.increaseHealth();
            console.log(chalk.green(`\n\tDrinking Portion...Your health: ${p1.health}\n`));
        }
        if (ask.opt === "Run") {
            console.log(chalk.red("You lose! Better luck next time."));
            process.exit();
        }
    }
    ///Zombie
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: (chalk.yellow("Choose your action?")),
                choices: ["Attack", "Drink Portion", "Run"]
            }
        ]);
        if (ask.opt === "Attack") {
            let randomNum = Math.floor(Math.random() * 2);
            if (randomNum > 0) {
                p1.decreaseHealth();
                console.log(`\n\t${p1.name} health: ${p1.health}`);
                console.log(`\t${o1.name} health: ${o1.health}\n`);
                if (p1.health <= 0) {
                    console.log(chalk.red("You lose! Better luck next time."));
                    process.exit();
                }
            }
            if (randomNum <= 0) {
                o1.decreaseHealth();
                console.log(`\n\t${p1.name} health: ${p1.health}`);
                console.log(`\t${o1.name} health: ${o1.health}\n`);
                if (o1.health <= 0) {
                    console.log(chalk.green("Congratulations! You won."));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Portion") {
            p1.increaseHealth();
            console.log(chalk.green(`\n\tDrinking Portion...Your health: ${p1.health}\n`));
        }
        if (ask.opt === "Run") {
            console.log(chalk.red("You lose! Better luck next time."));
            process.exit();
        }
    }
} while (true);
