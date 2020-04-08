// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ServerUtil } from './util';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let util = new ServerUtil();
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your have entered "happy-poker"');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let ready = vscode.commands.registerCommand('extension.poker.ready', () => {
		// 准备命令
		console.log('get ready');
		util.getReady();
	});
	let createServer = vscode.commands.registerCommand('extension.poker.createServer', () => {
		// 创建服务器命令
		console.log('create server');
		util.createServer();
	});
	let friends = vscode.commands.registerCommand('extension.poker.invateFriends', () => {
		// 邀请好友
		console.log('invate friends');
		const options = { prompt: '请输入好友id', placeHolder: '好友id' };
		vscode.window.showInputBox(options).then((value) => {
			if (value !== undefined) {
				console.log(value);
				util.invateFriends(value!);
			}
		}, (err) => {
			console.log(err);
		 });
	});
	let begin = vscode.commands.registerTextEditorCommand('extension.poker.begin', (editor, edit) => {
		// 开始游戏（editor上下文命令）
		console.log('begin');
		util.startGame();
	});
	let out = vscode.commands.registerTextEditorCommand('extension.poker.out', (editor, edit) => {
		// 出牌（editor上下文命令）
		console.log('out card');
		util.outCards(editor.document.getText());
	});
	let state = vscode.commands.registerCommand('extension.poker.checkTableState', () => {
		// 检查已出牌
		console.log('checkState');
		util.checkTableState();
	});
	let myId = vscode.commands.registerCommand('extension.poker.getMyId', () => {
		// 获取我的id
		console.log('get id');
		const id = util.getMyId();
	});

	context.subscriptions.push(ready);
	context.subscriptions.push(createServer);
	context.subscriptions.push(friends);
	context.subscriptions.push(begin);
	context.subscriptions.push(out);
	context.subscriptions.push(state);
	context.subscriptions.push(myId);
}

// this method is called when your extension is deactivated
export function deactivate() { }
