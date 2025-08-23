import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 클래스 네임을 병합하는 유틸리티 함수
 * clsx로 조건부 클래스를 처리하고 tailwind-merge로 중복 제거
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 날짜를 포맷팅하는 함수
 * @param date - 포맷할 날짜
 * @param locale - 로케일 설정 (기본값: 'ko-KR')
 */
export function formatDate(date: Date | string, locale = 'ko-KR'): string {
  const dateObject = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(dateObject);
}

/**
 * 읽기 시간을 계산하는 함수
 * @param content - 컨텐츠 문자열
 * @param wordsPerMinute - 분당 읽기 속도 (기본값: 200)
 */
export function calculateReadingTime(content: string, wordsPerMinute = 200): number {
  const words = content.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
}

/**
 * 슬러그를 생성하는 함수
 * @param text - 슬러그로 변환할 텍스트
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s가-힣-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .replace(/^-+|-+$/g, '');
}

/**
 * 이미지 사이즈 검증 함수
 * @param size - 파일 사이즈 (bytes)
 * @param maxSizeMB - 최대 사이즈 (MB)
 */
export function validateImageSize(size: number, maxSizeMB = 2): boolean {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return size <= maxSizeBytes;
}

/**
 * 발췌문 생성 함수
 * @param content - 전체 컨텐츠
 * @param maxLength - 최대 길이 (기본값: 160)
 */
export function generateExcerpt(content: string, maxLength = 160): string {
  const cleanContent = content
    .replace(/<[^>]*>/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  
  if (cleanContent.length <= maxLength) {
    return cleanContent;
  }
  
  return cleanContent.substring(0, maxLength).trim() + '...';
}