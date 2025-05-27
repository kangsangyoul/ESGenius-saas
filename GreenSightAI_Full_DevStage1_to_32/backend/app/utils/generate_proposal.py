
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from datetime import datetime

def generate_proposal(filename: str = "proposal_report.pdf"):
    c = canvas.Canvas(filename, pagesize=A4)
    width, height = A4
    x_margin = 50
    y = height - 60

    # Title
    c.setFont("Helvetica-Bold", 16)
    c.drawString(x_margin, y, "ESGenius 설비 예측 및 탄소 리포트")
    y -= 30
    c.setFont("Helvetica", 10)
    c.drawString(x_margin, y, f"작성일시: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    y -= 30

    # Section: 리포트 개요
    c.setFont("Helvetica-Bold", 12)
    c.drawString(x_margin, y, "[1] 리포트 개요")
    y -= 20
    c.setFont("Helvetica", 10)
    c.drawString(x_margin, y, "본 리포트는 ESGenius AI 시스템을 기반으로 실시간 설비 데이터와 과거 이력 데이터를 분석하여")
    y -= 15
    c.drawString(x_margin, y, "설비 고장 가능성과 탄소 배출량을 예측한 결과입니다.")
    y -= 30

    # Section: 설비 정보
    c.setFont("Helvetica-Bold", 12)
    c.drawString(x_margin, y, "[2] 설비 정보")
    y -= 20
    c.setFont("Helvetica", 10)
    equipment_info = [
        ("설비 ID", "INV_01"),
        ("운영 시간", "12시간"),
        ("평균 출력", "3.2 kW")
    ]
    for label, value in equipment_info:
        c.drawString(x_margin, y, f"• {label}: {value}")
        y -= 15
    y -= 10

    # Section: 예측 결과
    c.setFont("Helvetica-Bold", 12)
    c.drawString(x_margin, y, "[3] 예측 결과")
    y -= 20
    prediction_data = [
        ("예상 고장일", "2024-06-05"),
        ("이상 점수", "0.87 → 위험 (상위 10% 이내)"),
        ("신뢰도", "91.2%")
    ]
    for label, value in prediction_data:
        c.setFillColor(colors.black)
        c.drawString(x_margin, y, f"• {label}:")
        c.setFillColor(colors.red if '위험' in value else colors.black)
        c.drawString(x_margin + 120, y, value)
        y -= 15
    y -= 10

    # Section: 탄소 배출 분석
    c.setFont("Helvetica-Bold", 12)
    c.setFillColor(colors.black)
    c.drawString(x_margin, y, "[4] 탄소 배출 분석")
    y -= 20
    carbon_data = [
        ("총 배출량", "442.5 kgCO₂"),
        ("설비 유형 기준", "200 kg (태양광 평균)"),
        ("배출 수준", "보통 → 개선 필요")
    ]
    for label, value in carbon_data:
        c.drawString(x_margin, y, f"• {label}: {value}")
        y -= 15
    y -= 10

    # Section: ESG 기여 효과
    c.setFont("Helvetica-Bold", 12)
    c.drawString(x_margin, y, "[5] ESG 기여 효과")
    y -= 20
    c.setFont("Helvetica", 10)
    c.drawString(x_margin, y, "조기 점검을 통해 설비 고장을 예방함으로써 연간 약 120만원의 유지보수 비용 절감이 예상되며,")
    y -= 15
    c.drawString(x_margin, y, "탄소 배출량 약 1.3톤 절감으로 ESG 보고서에 직접 활용 가능합니다.")
    y -= 30

    # Footer
    c.setFont("Helvetica", 9)
    c.setFillColor(colors.gray)
    c.drawString(x_margin, y, "본 보고서는 ESGenius AI 시스템을 통해 자동 생성되었습니다.")
    c.drawString(x_margin, y - 12, "문의: sales@dextion.online / © 2025 DexTion Inc.")

    c.showPage()
    c.save()
