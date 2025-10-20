import { useState, useEffect, useMemo } from 'react'
import './App.css'

function App() {
  // Tự động import ảnh từ thư mục assets
  const images = useMemo(() => {
    const modules = import.meta.glob('./assets/*.{jpg,jpeg,png,webp}', { eager: true })
    return Object.values(modules).map(m => m.default)
  }, [])

  // Hiệu ứng trái tim bay
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement('div')
      heart.className = 'heart'
      heart.style.left = Math.random() * 100 + 'vw'
      heart.style.animationDuration = 3 + Math.random() * 2 + 's'
      document.body.appendChild(heart)
      setTimeout(() => heart.remove(), 5000)
    }, 400)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="stars"></div>
      
      <div className="container">
        {/* 🌸 Ảnh chính */}
        {images[0] && <img src={images[0]} alt="Ảnh chính" className="main-image" />}

        {/* 🌷 Tiêu đề và lời chúc */}
        <h1 className="title">Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10</h1>
        <p className="message">
          Chúc béiu luôn xinh đẹp, hạnh phúc và thành công trong cuộc sống.
          <br />
          Mỗi ngày mới là một bước tiến mới! 🌸
        </p>


        {/* 🌺 Ảnh phụ (trượt ngang tự động) */}
        <div className="image-slider">
          <div className="image-track">
            {images.slice(1).map((src, i) => (
              <img key={i} src={src} alt={`Ảnh ${i + 1}`} className="slider-item" />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
