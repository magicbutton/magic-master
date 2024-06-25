// -------------------------------------------------------------------
// Generated by 365admin-publish
// -------------------------------------------------------------------
/*
---
title: Web deploy to production
---
*/
package cmds

import (
	"context"

	"github.com/magicbutton/magic-master/execution"
	"github.com/magicbutton/magic-master/utils"
)

func ProvisionWebdeployproductionPost(ctx context.Context, args []string) (*string, error) {

	result, pwsherr := execution.ExecutePowerShell("john", "*", "magic-master", "60-provision", "10-web.ps1", "")
	if pwsherr != nil {
		return nil, pwsherr
	}
	utils.PrintSkip2FirstAnd2LastLines(string(result))
	return nil, nil

}
