import Ping from "@/app/magic/components/streams/ping";
import { StreamSpawnProcess } from "@/app/magic/components/streams/spawn";

export default function Page() {
  return (
    <div className="flex">
      {/* <Ping domain="nexigroup.com" count={4} />
      <Ping domain="google.com" count={3} /> */}
      <StreamSpawnProcess
        cmd={"pwsh"}
        args={[
          "-Command",
          `

$PSStyle.OutputRendering = [System.Management.Automation.OutputRendering]::PlainText

  function Generate-RandomDelay {
      $minDelay = 500
      $maxDelay = 2000
      $random = Get-Random -Minimum $minDelay -Maximum $maxDelay
      Start-Sleep -Milliseconds $random
  }
  
  try {
      for ($i = 1; $i -le 5; $i++) {
          Write-Output "Output $i"
          Generate-RandomDelay
      }
      throw "An intentional error occurred."
  }
  catch {
      Write-Error $_.Exception.Message
  }
      
  `,
        ]}
        timeout={10}
      />
    </div>
  );
}
