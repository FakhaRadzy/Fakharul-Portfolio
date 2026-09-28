from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import os
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "https://fakharul-portfolio.vercel.app"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health_check():
    return {"status": "ok"}

class Project(BaseModel):
    id: str
    title: str
    description: str
    tags: list[str]

projects: list[Project] = [
    Project(
        id="maybank-poc",
        title="Maybank App — Frontend POC",
        description="Built the main page of the Maybank app frontend as part of a proof-of-concept, focused on translating design requirements into a working React.js interface.",
        tags=["React.js", "JavaScript", "UI Development"],
    ),
    Project(
        id="edotco-ai-poc",
        title="Edotco — AI Data Readiness POC",
        description="Used Python to analyze provided datasets, assessing data relevance and quality to determine what was suitable to feed into an AI model.",
        tags=["Python", "Data Analysis", "Data Preprocessing"],
    ),
    Project(
        id="ytl-pseraya",
        title="YTL-PSERAYA — Backend Systems",
        description="Built backend logic and APIs across seven system modules for an energy trading platform, from functional spec to tested, working endpoints.",
        tags=["C#", "APIs", "Azure DevOps", "Postman"],
    ),
    Project(
        id="portfolio-site",
        title="This Portfolio",
        description="A full-stack portfolio built from scratch with a Vite + React + TypeScript frontend, Tailwind CSS, and a Python FastAPI backend serving real endpoints.",
        tags=["React", "TypeScript", "Tailwind", "FastAPI"],
    ),
]

@app.get("/api/projects", response_model=list[Project])
def get_projects():
    return projects

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.post("/api/contact")
def submit_contact(payload: ContactMessage):
    email_address = os.getenv("EMAIL_ADDRESS")
    email_password = os.getenv("EMAIL_APP_PASSWORD")

    msg = EmailMessage()
    msg["Subject"] = f"Portfolio contact from {payload.name}"
    msg["From"] = email_address
    msg["To"] = email_address
    msg["Reply-To"] = payload.email
    msg.set_content(f"From: {payload.name} <{payload.email}>\n\n{payload.message}")

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(email_address, email_password)
        smtp.send_message(msg)

    return {"success": True}