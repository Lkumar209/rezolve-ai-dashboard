import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-3xl font-bold">R</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Welcome to Rezolve.ai</h1>
          <p className="text-xl text-gray-400">Select your portal to continue</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-600/50 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Brain className="h-6 w-6 text-blue-400" />
                Engineer Portal
              </CardTitle>
              <CardDescription>
                Access AI-powered ticket resolution, automated time tracking, and intelligent escalations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/engineer">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Open Engineer Portal
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-600/50 transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-purple-400" />
                Manager Portal
              </CardTitle>
              <CardDescription>
                Monitor team performance, manage escalations, and access real-time analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/manager">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Open Manager Portal
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}