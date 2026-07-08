# -*- coding: utf-8 -*-
"""
팩트챗 '가명 처리' 실습용 테스트 PDF 생성 스크립트.
⚠️ 아래 데이터는 전부 가상(합성)입니다. 실제 인물과 무관합니다.
"""
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer,
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# 한글 폰트 임베드(맑은 고딕) — 모든 PDF 뷰어에서 안정적으로 렌더링
pdfmetrics.registerFont(TTFont("Malgun", "C:/Windows/Fonts/malgun.ttf"))
pdfmetrics.registerFont(TTFont("MalgunB", "C:/Windows/Fonts/malgunbd.ttf"))
KFONT = "Malgun"
KFONT_B = "MalgunB"

OUT = "public/docs/kbs-test-personal-data.pdf"

# ── 전부 가상의 합성 데이터 (실존 인물 아님) ──
ROWS = [
    ["1", "정회철", "010-2340-9147", "801105-1554251",
     "서울특별시 영등포구 여의공원로 13, 101동 902호", "jung.hc@example.com"],
    ["2", "김서연", "010-3821-5567", "920312-2143652",
     "경기도 성남시 분당구 판교로 235, 302호", "seoyeon.k@example.com"],
    ["3", "이준호", "010-4455-1092", "880724-1092384",
     "부산광역시 해운대구 센텀중앙로 90, 1503호", "junho.lee@example.com"],
    ["4", "박민지", "010-9087-3321", "950918-2334817",
     "인천광역시 연수구 송도과학로 32, 1204호", "minji.park@example.com"],
    ["5", "최동욱", "010-2211-7788", "770203-1445093",
     "대구광역시 수성구 동대구로 400, 7층", "dwchoi@example.com"],
    ["6", "한지우", "010-6654-2010", "010815-3225671",
     "광주광역시 서구 상무중앙로 58, 202호", "jiwoo.han@example.com"],
    ["7", "오세훈", "010-3390-4412", "860530-1667214",
     "대전광역시 유성구 대학로 99, 5층", "sehoon.oh@example.com"],
    ["8", "윤가은", "010-7712-8834", "990227-2778120",
     "서울특별시 마포구 월드컵북로 400, 1108호", "gaeun.yoon@example.com"],
    ["9", "장태민", "010-5098-6640", "831119-1889305",
     "경상남도 창원시 의창구 중앙대로 210, 301호", "tmjang@example.com"],
    ["10", "배수아", "010-8123-0456", "970706-2990418",
     "강원특별자치도 춘천시 중앙로 1, 6층", "sua.bae@example.com"],
]
HEADER = ["No", "성명", "연락처", "주민등록번호", "주소", "이메일"]

styles = getSampleStyleSheet()
title_style = ParagraphStyle("T", parent=styles["Title"], fontName=KFONT_B,
                             fontSize=18, leading=24, textColor=colors.HexColor("#c40000"))
sub_style = ParagraphStyle("S", parent=styles["Normal"], fontName=KFONT,
                           fontSize=10.5, leading=16, textColor=colors.HexColor("#333333"))
warn_style = ParagraphStyle("W", parent=styles["Normal"], fontName=KFONT_B,
                            fontSize=9.5, leading=15, textColor=colors.HexColor("#c40000"))
cell_style = ParagraphStyle("C", parent=styles["Normal"], fontName=KFONT,
                            fontSize=8.5, leading=12)
cell_head = ParagraphStyle("CH", parent=styles["Normal"], fontName=KFONT_B,
                           fontSize=9, leading=12, textColor=colors.white)

doc = SimpleDocTemplate(OUT, pagesize=A4,
                        leftMargin=18 * mm, rightMargin=18 * mm,
                        topMargin=18 * mm, bottomMargin=18 * mm,
                        title="KBS 팩트챗 실습용 테스트 명단(가상 데이터)")

flow = []
flow.append(Paragraph("KBS 방송 이벤트 참가자 명단 (테스트용)", title_style))
flow.append(Spacer(1, 4 * mm))
flow.append(Paragraph(
    "본 문서는 <b>팩트챗 '가명 처리(개인정보 마스킹)' 실습</b>을 위한 예제 자료입니다. "
    "채팅에 이 표를 붙여넣고, 개인정보를 [이름1]·[연락처] 등 가명으로 바꾸는 프롬프트를 연습해 보세요.",
    sub_style))
flow.append(Spacer(1, 3 * mm))
flow.append(Paragraph(
    "⚠️ 아래 성명·연락처·주민등록번호·주소·이메일은 모두 <b>가상으로 만든 합성 데이터</b>이며, "
    "실존 인물과 전혀 관련이 없습니다. 실제 개인정보를 업로드하지 마세요.",
    warn_style))
flow.append(Spacer(1, 6 * mm))

# 표 데이터 (Paragraph로 감싸 줄바꿈 허용)
data = [[Paragraph(h, cell_head) for h in HEADER]]
for r in ROWS:
    data.append([Paragraph(str(c), cell_style) for c in r])

col_widths = [10 * mm, 18 * mm, 26 * mm, 30 * mm, 58 * mm, 32 * mm]
table = Table(data, colWidths=col_widths, repeatRows=1)
table.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#c40000")),
    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
    ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#cccccc")),
    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#faf5f5")]),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("ALIGN", (0, 0), (0, -1), "CENTER"),
    ("LEFTPADDING", (0, 0), (-1, -1), 4),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4),
    ("TOPPADDING", (0, 0), (-1, -1), 5),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
]))
flow.append(table)

flow.append(Spacer(1, 8 * mm))
flow.append(Paragraph(
    "실습 프롬프트 예시 — \"위 표에서 개인정보(실명·연락처·주민등록번호·주소·이메일)를 찾아 "
    "[이름1], [연락처], [주민번호], [주소], [이메일] 같은 가명으로 바꿔서 다시 출력해줘. "
    "원문의 의미(행 순서·항목)는 그대로 유지해줘.\"",
    sub_style))

doc.build(flow)
print("생성 완료:", OUT)
