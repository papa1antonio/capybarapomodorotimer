function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Pomodoro Timer Gamificado');
}
