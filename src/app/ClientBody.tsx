'use client';

export function ClientBody({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This is now handled by ThemeProvider
  return children;
}
