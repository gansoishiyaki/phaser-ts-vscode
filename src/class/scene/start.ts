export class StartScene extends Phaser.Scene {
  create() {
    let text = this.add.text(0, 0, 'Phaser 3').setFontSize(32).setColor('#ff0');
  }
}