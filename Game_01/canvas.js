/*
Basic Game Checklist:
- Create a player 플레이어 생성하기 V
- Shoot projectiles 발사체 생성 및 쏘기
- Create enemies 적 생성하기
- Detect collision on enemy / projectile hit 적, 발사체 충돌 감지하기
- Detect collision on enemy / player hit 적, 플레이어 충돌 감지하기
- Remove off screen projectiles 스크린에서 벗어난 발사체 삭제하기
- Colorize game 색 입히기
- Shrink enemies on hit 맞힌 적 수축하기
- Create particle explosion on hit 맞았을 때 터지는 파티클 생성하기
- Add score 점수 추가하기
- Add game over UI 게임 오버 UI 추가하기
- Add restart button 재시작 버튼 추가하기
- Add start game button 게임 시작 버튼 추가하기
*/

const canvas = document.querySelector('canvas');

canvas.width = innerWidth;
canvas.height = innerHeight;

const c = canvas.getContext('2d');

class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
}

const x = canvas.width / 2;
const y = canvas.height / 2;

const player = new Player(x, y, 30, 'blue');
player.draw();